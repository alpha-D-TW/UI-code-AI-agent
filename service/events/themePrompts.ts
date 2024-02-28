const THEME_1_PROMPT = `
  SUse the Ant Design ConfigProvider component to customize the theme, for example:

  import { ConfigProvider, theme } from 'antd';  
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
  
  Render the ConfigProvider with the custom theme and App component： 
  ReactDOM.render(
    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>,
    document.getElementById('root')
  );
  For the requirement description, use the colors declared by the config in the custom theme.
  Start with <!DOCTYPE html>
`;

const THEME_2_PROMPT = `
  Customize the theme using the Ant Design ConfigProvider component, for example:

  import { ConfigProvider } from 'antd'; // Note: 'theme' is not imported as it's not used directly

  const config = {
    token: {
      borderRadius: 2,
      colorBgBase: "#fff",
      colorError: "#e84b3a",
      colorInfo: "#47A1AD",
      colorLink: "#F2617A",
      colorPrimary: "#013D4F",
      colorSuccess: "#6B9E78",
      colorTextBase: "#000000",
      colorWarning: "#CC8508",
      controlHeight: 32,
      fontFamily: "Noto Serif SC",
    },
  };

  Render the ConfigProvider with the custom theme and App component
  ReactDOM.render(
    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>,
    document.getElementById('root')
  );
  For the requirement description, use the colors declared by config in the custom theme.
  Start with <!DOCTYPE html>
`;

const THEME_3_PROMPT = `
  Customize the theme using the Ant Design ConfigProvider component, for example:

  import { ConfigProvider } from 'antd'; // Import only ConfigProvider, not the 'theme' object

  const config = {
    token: {
      borderRadius: 6,
      colorBgBase: "#fff",
      colorError: "#E94F49",
      colorInfo: "#44546B",
      colorLink: "#a30030",
      colorPrimary: "#BD3435",
      colorSuccess: "#6B9E78",
      colorTextBase: "#171717",
      colorWarning: "#D0016D",
      controlHeight: 32,
      fontFamily: "PingFang SC",
    },
  };

  Render the ConfigProvider with the custom theme and App component
  ReactDOM.render(
    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>,
    document.getElementById('root')
  );
  For the requirement description, use the colors declared by config in the custom theme.
  Start with <!DOCTYPE html>
`;

export const THEME_MAP = {
  theme_1: THEME_1_PROMPT,
  theme_2: THEME_2_PROMPT,
  theme_3: THEME_3_PROMPT,
};
