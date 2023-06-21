import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
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
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};
MenuItem.defaultProps = {
  index: '0',
  disabled: false,
};
MenuItem.displayName = "MenuItem";

export default MenuItem;
