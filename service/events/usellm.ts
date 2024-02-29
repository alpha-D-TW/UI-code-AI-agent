import { streamingOpenAIResponses } from "./llm";
import { IGenerateCodeParams, noticeHost } from "./generateCode";

export async function useLLM(
  params: IGenerateCodeParams,
  prompt_messages: { role: string; content: any }[] | undefined,
  socket: { enqueue: (v: any) => any }
) {
  let completion;
  try {
    // 调用大模型
    completion = await streamingOpenAIResponses(
      prompt_messages,
      (content: string, event?: string) => {
        if (event === "error") {
          noticeHost(socket, {
            type: "error",
            value: content,
          });
        } else {
          noticeHost(socket, {
            type: "chunk",
            value: content,
          });
        }
      },
      {
        openAiApiKey: params.openAiApiKey,
        openAiBaseURL: params.openAiBaseURL,
        llm: params.llm, // 'Gemini'
        moonshotApiKey: params.moonshotApiKey,
        baichuanApikey: params.baichuanApiKey,
      }
    );
  } catch (e) {
    console.log(e);
    noticeHost(socket, {
      type: "error",
      value: "openAI request error!",
    });
  }

  return completion;
}
