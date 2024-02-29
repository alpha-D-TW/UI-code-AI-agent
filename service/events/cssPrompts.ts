const COMMON_CSS_PROMPT = `
  Use the preset list style, for example:
  html {
      font-size: calc(100 / 1024 * 100vw);
      touch-action: manipulation;
    }

    html,
    body,
    #root{
      width: 100%;
      height: 100%;
    }

    body {
      min-width: 768px;
      overflow: auto;
    }

    #root {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 16px;
    }

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      user-select: none;
      outline: none;
    }

    input,
    textarea {
      user-select: auto;
    }

    svg {
      transform: translate3d(0, 0, 0);
    }
   If the system has a set theme color, then the theme color is used in the color selection.
`;

const ANTD_RESET_CSS_PROMPT = `
  Use the preset list style, for example:
  .ant-upload-wrapper .ant-upload-drag.ant-upload-disabled {
      p.ant-upload-drag-icon .anticon {
        opacity: 0.5;
      }

      p.ant-upload-text {
        color: rgb(0 0 0 / 50%);
      }
    }

    .ant-modal {
      .ant-modal-confirm-body {
        .ant-modal-confirm-title {
          font-weight: 500;
        }
      }
    }
  If the system has a set theme color, then the theme color is used in the color selection.
`;

const ELEMENT_RESET_CSS_PROMPT = `
  Use the preset list style, for example:
  div.el-date-editor.el-range-editor.el-input__inner {
      width: 250px;
      height: calc(38rem / 14);
      line-height: calc(38rem / 14);
      border-radius: 2px;
      justify-content: space-between;
      padding: 0 4px 0 10px;
      font-size: 1rem;
      font-weight: normal;
      color: #404040;
      line-height: 22/14 * 1rem;


      i {
        width: 16px;
        display: flex;
        align-items: center;
        transition: all 0s;
      }

      .el-icon-date,
      .el-icon-time {
        font-size: 16px;
        margin-left: 0;
      }

      .el-range-separator {
        width: 10%;
        display: flex;
        align-items: center;
      }
   }
  If the system has a set theme color, then the theme color is used in the color selection.
`;

const List_CSS_PROMPT = `
  Use the preset list style, for example:
  .list-container {
      display: flex;
      flex-direction: column;
    }

    .list-item {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #f0f0f0;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .list-item:hover {
      background-color: #e0e0e0;
    }

    .list-item a {
      text-decoration: none;
      color: #333;
    }

    .list-item a:hover {
      text-decoration: underline;
    }

    .list-item .icon {
      margin-right: 10px;
      font-size: 16px;
      color: #555;
    }

    .list-item .content {
      flex: 1;
    }

    .list-item .title {
      font-weight: bold;
      font-size: 16px;
      color: #333;
      margin-bottom: 5px;
    }

    .list-item .description {
      font-size: 14px;
      color: #666;
    }
  If the system has a set theme color, then the theme color is used in the color selection.
`;

const DETAIL_CSS_PROMPT = `
  Use the preset list style, for example:
  .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    h1 {
      font-size: 24px;
      color: #333;
    }

    .product-details {
      margin-top: 20px;
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .product-details h2 {
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;
    }

    .product-details p {
      font-size: 16px;
      color: #666;
      line-height: 1.5;
    }

    .product-details .price {
      font-size: 18px;
      color: #ff0000;
      font-weight: bold;
    }

    .product-details .features {
      margin-top: 20px;
    }

    .product-details .features ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .product-details .features li {
      font-size: 16px;
      color: #666;
      line-height: 1.5;
      margin-bottom: 5px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #666;
    }
    If the system has a set theme color, then the theme color is used in the color selection.
`;

export const CSS_MAP = {
    common: COMMON_CSS_PROMPT,
    antd_reset_css: ANTD_RESET_CSS_PROMPT,
    element_reset_css: ELEMENT_RESET_CSS_PROMPT,
    list_css: List_CSS_PROMPT,
    detail_css: DETAIL_CSS_PROMPT
};
