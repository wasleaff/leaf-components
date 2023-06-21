import React, { AnchorHTMLAttributes } from "react";
import classNames from "classnames";
export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}
//以下注释会在storybook文档中生成description的值
interface BaseButtonProps {
  /**
   * What CSS styles  to use
   */
  className?: string;
  /**
   * Whether it is disabled
   */
  disable?: boolean;
  /**
   * How large should the button be?
   */
  size?: ButtonSize;
  /**
   * What is the button Type?
   */
  btnType?: ButtonType;
  /**
   * The content contained in the button label
   */
  children?: React.ReactNode;
  /**
   * What is the link to the button
   */
  href: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

//支持button的原生属性，包括但不限于onClick事件
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
//Partial将交叉属性变成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

//以下注释会在storybook文档中生成doc的标题
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { className, disable, size, btnType, children, href, ...restProps } =
    props;

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disable: btnType === ButtonType.Link && disable,
  });

  if (btnType === ButtonType.Link) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button disabled={disable} className={classes} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disable: false,
  btnType: ButtonType.Default,
};

export default Button;
