import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

interface subMenuProps {
  index?: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export const SubMenu: React.FC<subMenuProps> = (props) => {
  const { index, title, children, className } = props;
  const context = useContext(MenuContext);
  const openedSubMenu = context.defaultOpenSubMenu as Array<string>;
  const isOpened =
    index && context.mode === "vertical"
      ? openedSubMenu?.includes(index)
      : false;
  //通过上面计算的isOpened字段来控制初始时候menuOpen的值
  const [menuOpen, setOpen] = useState(isOpened);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 100);
  };
  //如果是vertical仅添加点击事件（更改menuOpen）
  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  //如果是horizontal添加鼠标进出的事件(带有定时器的更改menuOpen)
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  const renderChildren = () => {
    const subMenuClasses = classNames("leaf-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement =
        child as React.FunctionComponentElement<subMenuProps>;

      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i.toString()}`,
        });
      } else {
        console.error(
          "Warning: SubMenu has a child which is not a MenuItem Component"
        );
      }
    });

    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" onClick={handleClick} {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";
