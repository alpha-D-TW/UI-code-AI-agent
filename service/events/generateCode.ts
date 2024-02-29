import { DSLPrompt, assemblePrompt } from "./prompts";
import { streamingOpenAIResponses } from "./llm";
import { mockComletion } from "./mock";
import { useLLM } from "./usellm";

export interface IGenerateCodeParams {
  generationType: string;
  image: string;
  text: string;
  openAiApiKey: string;
  openAiBaseURL: string;
  screenshotOneApiKey: null;
  isImageGenerationEnabled: true;
  editorTheme?: string;
  generatedCodeConfig: string;
  isTermOfServiceAccepted?: boolean;
  accessCode?: boolean;
  resultImage?: string;
  promptCode: string;
  history: any[];
  mockAiResponse?: boolean;
  llm: string;
  moonshotApiKey: string;
  baichuanApiKey: string;
  slug?: string;
  themeConfig: string;
}

export function noticeHost(
  socket: { enqueue: (v: any) => any },
  data: Record<any, any>
) {
  if (socket.enqueue) {
    socket.enqueue(encoder.encode(`${JSON.stringify(data)}\n`));
  }
}

const encoder = new TextEncoder();
export async function streamGenerateCode(
  params: IGenerateCodeParams,
  socket: { enqueue: (v: any) => any }
) {
  // 基于LLM生成DSL
  const useInputTextDemand = params["text"];
  let generatedDSL;
  if (useInputTextDemand) {
    const dsl_prompt_messages = await DSLPrompt(params["text"]);
    generatedDSL = await useLLM(params, dsl_prompt_messages, socket);
    console.log("generatedDSL---", generatedDSL);
  }

  // 基于LLM生成Code
  const generated_code_config = params["generatedCodeConfig"];
  let prompt_messages;
  const history = params["history"];
  const initTemplateCode =
    history && params.slug && params.slug !== "create"
      ? history.splice(0, 1)[0]
      : "";
  try {
    // 拼接Prompt
    if (params["resultImage"]) {
      prompt_messages = await assemblePrompt(
        params["image"],
        params["text"],
        generated_code_config,
        params["promptCode"],
        params.slug,
        initTemplateCode,
        params["themeConfig"],
        params["resultImage"]
      );
    } else {
      prompt_messages = await assemblePrompt(
        params["image"],
        generatedDSL || useInputTextDemand,
        generated_code_config,
        params["promptCode"],
        params.slug,
        initTemplateCode,
        params["themeConfig"]
      );
    }
  } catch (e) {
    console.log(e);
    noticeHost(socket, {
      type: "error",
      value: "Prompt error!",
    });
  }

  if (params["generationType"] === "update") {
    const history = params["history"];
    if (params.slug && params.slug !== "create") {
      history.forEach((item, index) => {
        prompt_messages.push({
          role: index % 2 === 0 ? "user" : "assistant",
          content: item,
        });
      });
    } else {
      history.forEach((item, index) => {
        prompt_messages.push({
          role: index % 2 === 0 ? "assistant" : "user",
          content: item,
        });
      });
    }
  }

  let completion;
  const SHOULD_MOCK_AI_RESPONSE = params["mockAiResponse"];

  //test: params['generationType'] === 'create'
  if (SHOULD_MOCK_AI_RESPONSE) {
    completion = await mockComletion((content: any) => {
      noticeHost(socket, {
        type: "chunk",
        value: content,
      });
    });
  } else {
    completion = await useLLM(params, prompt_messages, socket);
  }
  const updated_html = completion;
  noticeHost(socket, {
    type: "setCode",
    value: updated_html,
  });
  noticeHost(socket, {
    type: "status",
    value: "Code generation complete.",
  });

  return updated_html;
}
