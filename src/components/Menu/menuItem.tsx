import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { ConfigContext } from "../ConfigProvider/configProvider";

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, children } = props;
  //-----------------
  const { theme } = useContext(ConfigContext);
  // style={{ "--global-primary-color": theme || "#0d6efd" } as any}
  //-----------------
  //4.子组件获取传递的值
  const context = useContext(MenuContext);
  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });
  const handleClick = () => {
    if (context.OnSelect && !disabled && typeof index === "string") {
      context.OnSelect(index);
    }
  };
  return (
    <li
      className={classes}
      // style={style}
      onClick={handleClick}
      style={{ "--global-primary-color": theme || "#0d6efd" } as any}
    >
      {children}
    </li>
  );
};
MenuItem.defaultProps = {
  index: "0",
  disabled: false,
};
MenuItem.displayName = "MenuItem";

export default MenuItem;
