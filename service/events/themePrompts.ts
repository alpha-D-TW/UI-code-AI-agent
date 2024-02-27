const THEME_1_PROMPT = `
  Styles need to be declared in a style tag, and no inline styles should be generated. For example:

  <style>
  .header {
    background: #fff;
  }
  </style>

  To customize the theme using Ant Design's ConfigProvider component, follow this example:

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { theme, ConfigProvider } from 'antd';
  import App from './App'; // Assuming App is your main application component
  const config = {
    token: {
      borderRadius: 4,
      colorBgBase: "#fff",
      colorError: "#f56c6c",
      colorInfo: "#7facff",
      colorLink: "#f05a23",
      colorPrimary: "#ff6634",
      colorSuccess: "#52c41a",
      colorTextBase: "#333",
      colorWarning: "#fa7927",
      controlHeight: 32,
      fontFamily: "Avenir, Helvetica, Arial, sans-serif",
      fontFamilyCode: "SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace",
    },
  };
  ReactDOM.render(
    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>,
    document.getElementById('root')
  );
  For the requirement description, use the colors declared by config in the custom theme.
`;

const THEME_2_PROMPT = `
  Styles need to be declared in a style tag, and no inline styles should be generated. For example:

  <style>
  .header {
    background: #fff;
  }
  </style>

  To customize the theme using Ant Design's ConfigProvider component, follow this example:

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { theme, ConfigProvider } from 'antd';
  import App from './App'; // Assuming App is your main application component
  const config = {
    token: {
      borderRadius: 4,
      colorBgBase: "#fff",
      colorError: "#f56c6c",
      colorInfo: "#7facff",
      colorLink: "#f05a23",
      colorPrimary: "#ff6634",
      colorSuccess: "#52c41a",
      colorTextBase: "#333",
      colorWarning: "#fa7927",
      controlHeight: 32,
      fontFamily: "Avenir, Helvetica, Arial, sans-serif",
      fontFamilyCode: "SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace",
    },
  };
  ReactDOM.render(
    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>,
    document.getElementById('root')
  );
  For the requirement description, use the colors declared by config in the custom theme.
`;

const THEME_3_PROMPT = `
  Styles need to be declared in a style tag, and no inline styles should be generated. For example:

  <style>
  .header {
    background: #fff;
  }
  </style>

  To customize the theme using Ant Design's ConfigProvider component, follow this example:

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { theme, ConfigProvider } from 'antd';
  import App from './App'; // Assuming App is your main application component
  const config = {
    token: {
      borderRadius: 4,
      colorBgBase: "#fff",
      colorError: "#f56c6c",
      colorInfo: "#7facff",
      colorLink: "#f05a23",
      colorPrimary: "#ff6634",
      colorSuccess: "#52c41a",
      colorTextBase: "#333",
      colorWarning: "#fa7927",
      controlHeight: 32,
      fontFamily: "Avenir, Helvetica, Arial, sans-serif",
      fontFamilyCode: "SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace",
    },
  };
  ReactDOM.render(
    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>,
    document.getElementById('root')
  );
  For the requirement description, use the colors declared by config in the custom theme.
`;

export const THEME_MAP = {
  THEME_1: THEME_1_PROMPT,
  THEME_2: THEME_3_PROMPT,
  THEME_3: THEME_3_PROMPT,
};
