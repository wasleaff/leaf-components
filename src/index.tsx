import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export { default as Button } from "./components/Button";
export { default as Menu } from "./components/Menu";
export { default as Input } from "./components/Input";
// export { default as MenuItem } from "./components/Menu/menuItem";
// export { default as SubMenu } from "./components/Menu/subMenu";
export { default as AutoComplete } from "./components/AutoComplete";
export { default as Transition } from "./components/Transition";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
