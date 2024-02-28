export enum EditorTheme {
  ESPRESSO = "espresso",
  COBALT = "cobalt",
}

// Keep in sync with backend (prompts.py)
export enum GeneratedCodeConfig {
  HTML_TAILWIND = "html_tailwind",
  REACT_TAILWIND = "react_tailwind",
  REACT_SHADCN_UI = "react_shadcn_ui",
  BOOTSTRAP = "bootstrap",
  // IONIC_TAILWIND = "ionic_tailwind",
  REACT_ANTD = "react_antd",
  VUE_TAILWIND = "vue_tailwind",
  VUE_ELEMENT = "vue_element",
  REACT_NATIVE = "react_native",
  // VUE_ELEMENT_SYSTEM_PROMPT
}

export interface Settings {
  openAiApiKey: string | null;
  openAiBaseURL: string | null;
  screenshotOneApiKey: string | null;
  isImageGenerationEnabled: boolean;
  editorTheme: EditorTheme;
  generatedCodeConfig: GeneratedCodeConfig;
  // Only relevant for hosted version
  isTermOfServiceAccepted: boolean;
  accessCode: string | null;
  mockAiResponse: boolean;
  promptCode: string;
  init: boolean;
  llm: string;
  moonshotApiKey: string;
  baichuanApikey: string;
  themeConfig: ThemeCodeConfig;
}

export enum AppState {
  INITIAL = "INITIAL",
  CODING = "CODING",
  CODE_READY = "CODE_READY",
}

export enum ThemeCodeConfig {
  DEFAULT_THEME = "default_theme",
  THEME_1 = "theme_1",
  THEME_2 = "theme_2",
  THEME_3 = "theme_3",
}
