// Button.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./input";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Input,
  tags: ["autodocs"],
  args: {
    //👇 Now all Button stories will be primary.
    placeholder: "placeholder...",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Large: Story = {
  args: {
    size: "lg",
  },
};
export const Small: Story = {
  args: {
    size: "sm",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Prepare: Story = {
  args: {
    prepend: "https:",
  },
};

export const Append: Story = {
  args: {
    append: ".com",
  },
};
