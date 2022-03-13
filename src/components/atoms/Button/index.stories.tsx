import { action } from "@storybook/addon-actions";
import Button, { Props } from "./index";

export default {
  component: Button,
  title: "Btn"
};

export const taskData = {
  theme: "primary",
  text: "button"
};

export const actionsData = {
  onClick: action("onClick")
};

export const Default = () => <Button theme="primary" text="button" />;
