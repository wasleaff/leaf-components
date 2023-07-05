import React, { createContext, useState } from "react";

// 定义 ConfigContext 上下文
export interface ConfigContextProps {
  theme?: string;
  //   setTheme: (theme: string) => void;
  children?: React.ReactElement;
}

export const ConfigContext = createContext<ConfigContextProps>({});

// 定义 ConfigProvider 组件
/**
 * Wrap the root component in the ConfigProvider component and pass in theme parameters to customize the component.
 */
const ConfigProvider: React.FC<ConfigContextProps> = (props) => {
  const { children } = props;
  return (
    <ConfigContext.Provider value={props}>{children}</ConfigContext.Provider>
  );
};

export default ConfigProvider;
