import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./icon";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    icon: "coffee",
  },
};
export const Theme: Story = {
  args: {
    theme: "info",
    icon: "coffee",
  },
};

export const FontAwesomeArgs: Story = {
  args: {
    icon: "snowboarding",
    spin: true,
    size:'xl',
  },
};
