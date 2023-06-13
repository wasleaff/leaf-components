// Button.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";
import { SubMenu } from "./subMenu";
import { Menu } from "./menu";
import { MenuItem } from "./menuItem";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: SubMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof SubMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// 👇 The MenuTemplate construct will be spread to the existing stories.
const SubMenuTemplate: Story = {
  render: (args) => (
    <Menu>
      <SubMenu {...args}>
        {/* <MenuItem>item 1</MenuItem>
        <MenuItem>item 2</MenuItem> */}
      </SubMenu>
    </Menu>
  ),
};

export const Title = {
  ...SubMenuTemplate,
  args: {
    title: "subMenu",
  },
};

// export const Children = {
//   ...SubMenuTemplate,
//   args: {
//     children: <MenuItem>item 2</MenuItem>,
//   },
// };
