export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const DEFAULT_API_HOST = "https://api.nextchat.dev";
export const OPENAI_BASE_URL = "https://api.openai.com";
export const ANTHROPIC_BASE_URL = "https://api.anthropic.com";

export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
  Reward = "/reward",
}

export enum ApiPath {
  Cors = "",
  OpenAI = "/api/openai",
  Anthropic = "/api/anthropic",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 120000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
  Google = "Google",
  Anthropic = "Anthropic",
}

export enum ModelProvider {
  GPT = "GPT",
  GeminiPro = "GeminiPro",
  Claude = "Claude",
}

export const Anthropic = {
  ChatPath: "v1/messages",
  ChatPath1: "v1/complete",
  ExampleEndpoint: "https://api.anthropic.com",
  Vision: "2023-06-01",
};

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  // Azure32kPath:
  //   "openai/deployments/gpt-4-32k/chat/completions?api-version=2023-05-15",
  // Azure32kPathCheck: "openai/deployments/gpt-4-32k/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ExampleEndpoint: "https://{resource-url}/openai/deployments/{deploy-id}",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: "v1beta/models/gemini-pro:generateContent",
  VisionChatPath: "v1beta/models/gemini-pro-vision:generateContent",

  // /api/openai/v1/chat/completions
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
// export const DEFAULT_SYSTEM_TEMPLATE = `
// You are ChatGPT, a large language model trained by {{ServiceProvider}}.
// Knowledge cutoff: {{cutoff}}
// Current model: {{model}}
// Current time: {{time}}
// Latex inline: $x^2$
// Latex block: $$e=mc^2$$
// `;
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by {{ServiceProvider}}.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: \\(x^2\\) 
Latex block: $$e=mc^2$$
`;

export const SUMMARIZE_MODEL = "gpt-35-turbo-0125";
export const GEMINI_SUMMARIZE_MODEL = "gemini-pro";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "gpt-4-turbo-preview": "2023-12",
  "gpt-4-1106-preview": "2023-04",
  "gpt-4-0125-preview": "2023-12",
  "gpt-4-vision-preview": "2023-04",
  // After improvements,
  // it's now easier to add "KnowledgeCutOffDate" instead of stupid hardcoding it, as was done previously.
  "gemini-pro": "2023-12",
};

export const DEFAULT_MODELS = [
  // {
  //   name: "gpt-4",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-16k",
  //   describe: "GPT-3,最快,笨",
  //   available: false,
  // },
  {
    name: "gpt-35-turbo-0125",
    describe: "GPT-3,最快,效果一般,最便宜",
    available: true,
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
    },
  },
  // {
  //   name: "gpt-4",
  //   describe: "GPT-4,聪明,贵,慢",
  //   available: false,
  // },
  {
    name: "gpt-4-0125-preview",
    describe: "GPT-4,最新版,推荐",
    available: true,
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
    },
  },
  {
    name: "gpt-4-1106-preview",
    describe: "GPT-4,旧版,备用",
    available: true,
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
    },
  },
  {
    name: "claude-3-opus-20240229",
    describe: "claude第三代模型最强版",
    available: true,
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
    },
  },
  {
    name: "gpt-4-vision-preview",
    available: true,
    describe: "GPT-4多模态,图像识别",
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
    },
  },
  {
    name: "gemini-pro",
    available: true,
    describe: "谷歌的,不要钱,但质量一般",
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
    },
  },
  {
    name: "gemini-pro-vision",
    available: false,
    describe: "谷歌多模态,图像识别",
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
    },
  },
  // {
  //   name: "gpt-4-32k",
  //   describe: "GPT-4,聪明,慢,但是白嫖",
  //   available: false,
  // },
  // {
  //   name: "gpt-4-all",
  //   describe: "GPT-4全能版,联网绘图多模态,又慢又贵",
  //   available: false,
  // },
  // {
  //   name: "gpt-4v",
  //   describe: "GPT-4,官方网页版,最聪明,贵且慢",
  //   available: true,
  // },
  // {
  //   name: "net-gpt-4",
  //   describe: "GPT-4,联网版,最慢",
  //   available: true,
  // },
  {
    name: "midjourney",
    describe: "绘图用,不用选",
    available: false,
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
    },
  },
] as const;

export const AZURE_MODELS: string[] = [
  "gpt-35-turbo-0125",
  "gpt-4-0125-preview",
];
// export const AZURE_PATH = AZURE_MODELS.map((m) => { m: `openai/deployments/${m}/chat/completions`});
// export const AZURE_PATH = AZURE_MODELS.map((m) => ({ m: `openai/deployments/${m}/chat/completions`} ));
export const AZURE_PATH = AZURE_MODELS.reduce(
  (acc, item) => ({
    ...acc,
    [item]: `openai/deployments/${item}/chat/completions`,
  }),
  {},
);
// console.log(AZURE_PATH);

export const DISABLE_MODELS = DEFAULT_MODELS.filter(
  (item) => !item.available,
).map((item2) => item2.name);

// console.log('========', DISABLE_MODELS)
export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

export const internalWhiteWebDavEndpoints = [""];
