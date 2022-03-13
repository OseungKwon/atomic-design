import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/styles/GlobalStyle";

// globalStyle를 모든 스토리에 적용
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
