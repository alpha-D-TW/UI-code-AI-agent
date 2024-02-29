import OpenAI from "openai";

import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";

// 功能函数，用于从base64数据URL中提取MIME类型和纯base64数据部分
function extractMimeAndBase64(dataUrl: string) {
  const matches = dataUrl.match(/^data:(.+);base64,(.*)$/);
  if (!matches || matches.length !== 3) {
    throw new Error("Invalid base64 data URL");
  }
  return { mimeType: matches[1], base64Data: matches[2] };
}

// 转换函数
function transformData(data: Record<any, any>[]) {
  const parts = [];

  // 遍历原始数据，合并文本内容
  for (const item of data) {
    if (item.content) {
      if (typeof item.content === "string") {
        // 对于系统角色的文本内容
        parts.push({ text: item.content });
      } else if (Array.isArray(item.content)) {
        // 对于用户角色的内容数组
        for (const part of item.content) {
          if (part.type === "text") {
            parts.push({ text: part.text });
          } else if (part.type === "image_url") {
            // 提取MIME类型和base64数据
            const { mimeType, base64Data } = extractMimeAndBase64(
              part.image_url.url
            );
            parts.push({
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            });
          }
        }
      }
    }
  }

  // 返回新的数据结构，所有文本和图像都合并到一个用户角色中
  return [
    {
      role: "user",
      parts: parts,
    },
  ];
}

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

export async function streamingOpenAIResponses(
  messages: any,
  callback: {
    (content: string, event?: string | undefined): void;
    (arg0: string, arg1: string | undefined): void;
  },
  params: {
    openAiApiKey: any;
    openAiBaseURL: any;
    llm: string;
    moonshotApiKey: any;
    baichuanApikey: any;
  }
) {
  if (params.llm === "moonshot") {
    console.log("start use moonshot", "message", messages);
    if (!params.moonshotApiKey) {
      callback("No Moonshot key, set it", "error");
      return "";
    }
    const openai = new OpenAI({
      apiKey: params.moonshotApiKey,
      baseURL: "https://api.moonshot.cn/v1",
    });

    const stream = await openai.chat.completions.create({
      model: "moonshot-v1-8k",
      temperature: 0,
      max_tokens: 4096,
      messages,
      stream: true,
    });
    let full_response = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      full_response += content;
      callback(content);
    }

    return full_response;
  } else if (params.llm === "baichuan") {
    console.log("start use baichuan", "message", messages);

    if (!params.baichuanApikey) {
      callback("No Baichuan key, set it", "error");
      return "";
    }
    const openai = new OpenAI({
      apiKey: params.baichuanApikey,
      baseURL: "https://api.baichuan-ai.com/v1",
    });

    const stream = await openai.chat.completions.create({
      model: "Baichuan2-Turbo",
      temperature: 0,
      max_tokens: 4096,
      messages,
      stream: true,
    });

    let full_response = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      full_response += content;
      callback(content);
    }

    return full_response;
  } else {
    if (!params.openAiApiKey) {
      callback("No openai key, set it", "error");
      return "";
    }
    const openai = new OpenAI({
      apiKey: params.openAiApiKey || process.env["OPENAI_API_KEY"], // defaults to process.env["OPENAI_API_KEY"]
      baseURL:
        params.openAiBaseURL ||
        process.env["OPENAI_BASE_URL"] ||
        "https://api.openai.com/v1",
    });

    const stream = await openai.chat.completions.create({
      model: "gpt-4-0125-preview",
      temperature: 0,
      max_tokens: 4096,
      messages,
      stream: true,
    });
    let full_response = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      full_response += content;
      callback(content);
    }

    return full_response;
  }
}
