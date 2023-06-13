import React, {
  FC,
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
} from "react";
import classNames from "classnames";

type InputSize = "lg" | "sm";
//Omit去除InputHTMLAttributes中与InputProps的同名属性size
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /**
   * Whether to disable Input
   */
  disabled?: boolean;
  /**
   * Set the input size , support lg or sm
   */
  size?: InputSize;
  /**
   * Adding prefixes, using to configure fixed combinations
   */
  prepend?: string;
  /**
   * Adding suffixes, using to configure fixed combinations
   */
  append?: string;
  //将ChangeEvent设置为HTMLInputElement
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
  const { disabled, size, prepend, append, style, ...restProps } = props;
  const classes = classNames("leaf-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });
  const fixControlledValue = (value: any) => {
    //初始化setState传入的值为空，应设置为空字符串
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };

  // 避免出现既设置value，又设置defaultValue的情况
  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return (
    <div className={classes} style={style}>
      {prepend && <div className="leaf-input-group-prepend">{prepend}</div>}
      <input className="leaf-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="leaf-input-group-append">{append}</div>}
    </div>
  );
};
Input.defaultProps = {
  size: "sm",
  disabled: false,
};
export default Input;
