import React from "react";

import { render, screen, waitFor } from "@testing-library/react";

import { Icon, IconProps } from "./icon";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

//testProps: IconProps相当于类型转换！
const testProps: IconProps = {
  theme: "dark",
  icon: "coffee",
};

describe("Icon Component", () => {
  it("renders the icon correctly", () => {
    render(<Icon {...testProps} />);
    waitFor(() => {
      const iconElement = screen.getByTestId("icon");
      expect(iconElement).toBeInTheDocument();
      // 判断Icon组件是否具有添加主题色的类名
      expect(iconElement.classList.contains("icon-dark")).toBe(true);
    });
  });
});
