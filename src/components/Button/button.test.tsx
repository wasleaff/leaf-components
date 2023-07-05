import React from "react";

import { render, fireEvent } from "@testing-library/react";

import { Button } from "./button";
import { ButtonProps, ButtonType, ButtonSize } from "./button";

const defaultProps = {
  //1.定义回调
  onClick: jest.fn(),
};

//testProps: ButtonProps相当于类型转换！
const testProps: ButtonProps = {
  btnType: "primary",
  size: ButtonSize.Large,
  className: "class",
};

const disabledProps: ButtonProps = {
  disabled: true,
  //测试禁用状态的回调函数
  onClick: jest.fn(),
};

describe("test Button component", () => {
  it("should render the correct default button", () => {
    //2.通过Props添加回调函数
    const wrapper = render(<Button {...defaultProps}>Button</Button>);
    //类型推断,使得element上存在element.disabled属性
    const element = wrapper.getByText("Button") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeFalsy();
    //3.模拟事件
    fireEvent.click(element);
    //4.断言事件已经被触发
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component base on different props", () => {
    const wrapper = render(<Button {...testProps}>Button</Button>);
    const element = wrapper.getByText("Button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-lg class");
  });
  it("should render link when btnType equals link and href is provided", () => {
    const wrapper = render(
      <Button btnType={"link"} href="http://dummyurl">
        Link
      </Button>
    );
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });
  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(<Button {...disabledProps}>Button</Button>);
    const element = wrapper.getByText("Button") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    //禁用状态下不能调用回调函数
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
