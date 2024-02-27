import { ThemeCodeConfig } from "@/components/types";
import { THEME_MAP } from "./themePrompts";
import {
  REACT_ANTD_SYSTEM_PROMPT,
  REACT_ANTD_SYSTEM_PROMPT_TEXT,
  SYSTEM_MAP,
} from "./systemPrompts";

const USER_PROMPT = `
Generate code for a app that looks exactly like this.
{promptCode}
`;

const generateSystemContent = async (
  text_data: string,
  generated_code_config: string,
  slug: string | undefined,
  themeConfig: string
) => {
  let systemConent =
    (SYSTEM_MAP as any)[generated_code_config] || REACT_ANTD_SYSTEM_PROMPT;

  if (text_data) {
    systemConent =
      (SYSTEM_MAP as any)[`${generated_code_config}_text`] ||
      REACT_ANTD_SYSTEM_PROMPT_TEXT;
  }

  // todo: temporary hard code.
  if (slug && slug !== "create") {
    systemConent = (SYSTEM_MAP as any)[`import_code_${generated_code_config}`];
  }

  if (themeConfig !== ThemeCodeConfig.DEFAULT_THEME) {
    systemConent = `${systemConent} ${(THEME_MAP as any)[themeConfig]}`;
  }

  if (generated_code_config === "react_shadcn_ui") {
    // http://localhost:3000/prompts/shadcn-ui.md
    // const response = await fetch(`http://localhost:3000/prompts/shadcn-ui.md`, {
    const response = await fetch(
      `https://raw.githubusercontent.com/sparrow-js/ant-codeAI/main/public/prompts/shadcn-ui.md`,
      {
        method: "get",
        headers: new Headers({
          "Content-Type": "text/markdown",
        }),
      }
    );
    const systemPrompt = await response.text();
    if (systemPrompt) {
      systemConent = systemPrompt;
    }
  }
  return systemConent;
};

const generateUserContent = (
  image_data_url: string,
  text_data: string, //用户输入
  promptCode: string,
  slug: string | undefined,
  initTemplateCode: string,
  result_image_data_url = ""
) => {
  let userContent: any[] = [
    {
      type: "text",
      text: USER_PROMPT.replace("{promptCode}", promptCode),
    },
  ];
  if (slug && slug !== "create") {
    userContent = [
      {
        type: "text",
        text: `Here is the code of the app: ${initTemplateCode}`,
      },
    ];
    // "Here is the code of the app: " + code
  }

  if (image_data_url) {
    userContent.unshift({
      type: "image_url",
      image_url: { url: image_data_url, detail: "high" },
    });
  }

  if (text_data) {
    userContent.unshift({
      type: "text",
      text: text_data,
    });
  }

  if (result_image_data_url) {
    userContent.splice(1, 0, {
      type: "image_url",
      image_url: { url: result_image_data_url, detail: "high" },
    });
  }
  return text_data;
};

export async function assemblePrompt(
  image_data_url: string,
  text_data: string, //用户输入
  generated_code_config: string,
  promptCode: string,
  slug: string | undefined,
  initTemplateCode: string,
  themeConfig: string,
  result_image_data_url = ""
) {
  const systemConent = await generateSystemContent(
    text_data,
    generated_code_config,
    slug,
    themeConfig
  );
  const userContent = generateUserContent(
    image_data_url,
    text_data, //用户输入
    promptCode,
    slug,
    initTemplateCode,
    result_image_data_url
  );

  return [
    {
      role: "system",
      content: systemConent,
    },
    {
      role: "user",
      content: userContent,
    },
  ];
}
