// Button.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./menu";
import { MenuItem } from "./menuItem";
import { SubMenu } from "./subMenu";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Menu> = {
  tags: ["autodocs"],
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

// 👇 The MenuTemplate construct will be spread to the existing stories.
const MenuTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <Menu {...args}>
        <MenuItem>item 1</MenuItem>
        <MenuItem>item 2</MenuItem>
        <MenuItem>item 3</MenuItem>
      </Menu>
    );
  },
};

export const VerticalMode = {
  ...MenuTemplate,
  args: {
    mode: "vertical",
  },
};

export const HorizontalMode = {
  ...MenuTemplate,
  args: {
    mode: "horizontal",
  },
};

export const DefaultIndex = {
  ...MenuTemplate,
  args: {
    defaultIndex: "1",
  },
};

export const DefaultOpenSubMenu = {
  args: {
    mode: "vertical",
    defaultOpenSubMenu: ["2", "3"],
  },
  render: ({ ...args }) => {
    return (
      <Menu {...args}>
        <MenuItem>item 1</MenuItem>
        <MenuItem>item 2</MenuItem>
        <SubMenu title="item 3">
          <MenuItem>SubItem 3-1</MenuItem>
          <MenuItem>SubItem 3-2</MenuItem>
        </SubMenu>
        <SubMenu title="item 4">
          <MenuItem>SubItem 4-1</MenuItem>
          <MenuItem>SubItem 4-2</MenuItem>
        </SubMenu>
      </Menu>
    );
  },
};
