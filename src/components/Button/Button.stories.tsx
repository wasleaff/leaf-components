// Button.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { ButtonSize, ButtonType } from "./button";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    btnType: ButtonType.Primary,
    children: "Button",
  },
};

export const Default: Story = {
  args: {
    btnType: ButtonType.Default,
    children: "Button",
  },
};
export const Danger: Story = {
  args: {
    btnType: ButtonType.Danger,
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    btnType: ButtonType.Link,
    href: "https://storybook.js.org/docs/react/writing-stories/introduction",
    children: "Button",
  },
};
export const Small: Story = {
  args: {
    size: ButtonSize.Small,
    children: "Button",
  },
};
export const Large: Story = {
  args: {
    size: ButtonSize.Large,
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disable: true,
    children: "Button",
  },
};
