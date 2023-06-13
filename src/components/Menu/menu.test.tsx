import React from "react";
import {
  render,
  fireEvent,
  RenderResult,
  cleanup,
} from "@testing-library/react";
import { Menu } from "./menu";
import { MenuItem } from "./menuItem";
import { MenuProps } from "./menu";

const testProps: MenuProps = {
  defaultIndex: "0",
  className: "test",
  OnSelect: jest.fn(),
};

const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
};

const testMenu = (props: MenuProps) => {
  return (
    <Menu {...props} mode="vertical">
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>third</MenuItem>
    </Menu>
  );
};
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem component", () => {
  //在test之前执行的通用函数
  beforeEach(() => {
    wrapper = render(testMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  //测试样式
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("leaf-menu test");
    expect(menuElement.getElementsByTagName("li").length).toEqual(3);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  //测试行为
  it("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText("third");
    //active
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.OnSelect).toHaveBeenCalledWith("2");
    //disabled
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.OnSelect).not.toHaveBeenCalledWith("1");
  });

  it("should render vertical mode when mode is  set to vertical", () => {
    cleanup();
    const wrapper = render(testMenu(testVerProps));
    const menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("menu-vertical");
  });
});
