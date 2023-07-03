//导入语言切换配置文件
import i18n from "./i18next";
import type { Preview  } from "@storybook/react";

//导入全局样式
import "../src/styles/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const preview: Preview = {
  //语言切换按钮
  globals: {
    locale: "en",
    locales: {
      en: { title: "English", left: "🇺🇸" },
      fr: { title: "Français", left: "🇫🇷" },
      ja: { title: "日本語", left: "🇯🇵" },
    },
  },
  parameters: {
    //使用语言切换
    i18n,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export default preview;
