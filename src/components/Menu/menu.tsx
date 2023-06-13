import React, { useState, createContext } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = "vertical" | "horizontal";
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  /**
   * Maybe you can define the initial menuitem
   */
  defaultIndex?: string;
  /**
   * What CSS styles  to use
   */
  className?: string;
  /**
   * What kind of menu arrangement do you want?
   */
  mode?: MenuMode;
  /**
   * What CSS styles  to use
   */
  style?: React.CSSProperties;
  /**
   * Perhaps you can add events when the menuitem is selected
   */
  OnSelect?: SelectCallback;

  /**
   * Menu content, write only menuitems or submenus
   */

  //类型“MenuProps”上不存在属性“children”
  children?: React.ReactNode;
  /**
   * Maybe you can initialize a series opened submenus
   */
  defaultOpenSubMenu?: string[];
}

//透传active的索引以及选择的回调函数
interface IMenuContext {
  index: string;
  OnSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenu?: string[];
}

//1.创建上下文对象
export const MenuContext = createContext<IMenuContext>({ index: "0" });

export const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    defaultIndex,
    style,
    OnSelect,
    children,
    defaultOpenSubMenu,
  } = props;
  //所有子组件共享一个active属性，所以设置在父组件中
  const [currentActive, setActive] = useState(defaultIndex);
  //包装被选中的回调函数以及改变active属性的方法向下传递
  const handleClick = (index: string) => {
    setActive(index);
    if (OnSelect) OnSelect(index);
  };
  //2.定义传递的值
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    OnSelect: handleClick,
    mode,
    defaultOpenSubMenu,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childrenElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childrenElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childrenElement, { index: index.toString() });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem Component"
        );
      }
    });
  };

  const classes = classNames("leaf-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      {/* 3.使用上下文对象的Provider并传值 */}
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  // defaultOpenSubMenu: [],
};
