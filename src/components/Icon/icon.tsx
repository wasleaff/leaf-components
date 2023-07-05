import React, { useContext } from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { ConfigContext } from "../ConfigProvider/configProvider";

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

export const Icon: React.FC<IconProps> = (props) => {
  // icon-primary
  const { className, theme, ...restProps } = props;
  const classes = classNames("leaf-icon", className, {
    [`icon-${theme}`]: theme,
  });

  //-----------------
  const { theme: configTheme } = useContext(ConfigContext);
  // style={{ "--global-primary-color": theme || "#0d6efd" } as any}
  //-----------------
  return (
    <FontAwesomeIcon
      className={classes}
      {...restProps}
      data-testid="icon"
      style={{ "--global-primary-color": configTheme || "#0d6efd" } as any}
    />
  );
};

export default Icon;
