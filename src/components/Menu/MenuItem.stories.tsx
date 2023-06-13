// Button.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./menuItem";
import { Menu } from "./menu";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: MenuItem,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Disabled: Story = {
  render: (args) => (
    <Menu>
      <MenuItem {...args}>item 1</MenuItem>
    </Menu>
  ),
};
