import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ConfigProvider from "./configProvider";
import { Button } from "../Button/button";
import { Icon } from "../Icon/icon";
import { Menu } from "../Menu/menu";
import { Progress } from "../Progress/progress";
import { MenuItem } from "../Menu/menuItem";
import { Input } from "../Input/input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: ConfigProvider,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      name: "Theme",
      description: "The primary theme color of the component",
      type: { name: "string" },
      defaultValue: "#1890ff",
    },
  },
} satisfies Meta<typeof ConfigProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const ConfigThemeHooks = () => {
  const [theme, setTheme] = useState("#1890ff");
  const [inputValue, setInputValue] = useState("#00FF00");
  return (
    <div>
      <div style={{ display: "flex" }}>
        输入主题色：
        <div style={{ width: "100px", marginRight: "50px" }}>
          <Input
            onChange={({ target }) => {
              setInputValue(target.value);
            }}
            placeholder="#00FF00"
          />
        </div>
        <div>
          <Button
            onClick={() => {
              setTheme(inputValue);
            }}
          >
            确定啦
          </Button>
        </div>
      </div>
      <hr></hr>
      <ConfigProvider theme={theme}>
        <div>
          <Button>按钮啊</Button>
          <Button btnType="primary">按钮啊</Button>
          <br />
          <Icon icon="coffee" theme="primary" size="xl" />
          <Menu mode="horizontal">
            <MenuItem>item 1</MenuItem>
            <MenuItem>item 2</MenuItem>
            <MenuItem>item 3</MenuItem>
          </Menu>
          <Menu mode="vertical">
            <MenuItem>item 1</MenuItem>
            <MenuItem>item 2</MenuItem>
            <MenuItem>item 3</MenuItem>
          </Menu>
          <Progress percent={20} />
        </div>
      </ConfigProvider>
    </div>
  );
};

export const ThemeConfig: Story = {
  args: {
    theme: "",
  },
  render: () => <ConfigThemeHooks />,
};
