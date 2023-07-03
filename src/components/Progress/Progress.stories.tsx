// Button.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Progress,
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    percent: 20,
  },
};

export const StrokeHeight: Story = {
  args: {
    strokeHeight: 30,
    percent: 20,
  },
};

export const UnShowText: Story = {
  args: {
    showText: false,
    percent: 20,
  },
};

export const StylesProgress: Story = {
  args: {
    styles: {
      width: "200px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "red",
    },
    percent: 20,
  },
};
