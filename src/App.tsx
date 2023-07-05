import Icon from "./components/Icon/icon";
import ConfigProvider from "./components/ConfigProvider";
import Button from "./components/Button";
import { useState } from "react";
import Menu from "./components/Menu/menu";
import { MenuItem } from "./components/Menu/menuItem";
import Progress from "./components/Progress";

function App() {
  const [theme, setTheme] = useState("#1890ff");
  setTimeout(function () {
    setTheme("#00FF00");
  }, 3000);
  return (
    <div className="App" style={{ margin: "15px" }}>
      <h2>添加测试用例：</h2>
      <ConfigProvider theme={theme}>
        <div>
          <Button>按钮啊</Button>
          <Button btnType="primary">按钮啊</Button>
          <br />
          <Icon icon="coffee" theme="primary" />
          <br />
          <Menu mode="horizontal">
            <MenuItem>item 1</MenuItem>
            <MenuItem>item 2</MenuItem>
            <MenuItem>item 3</MenuItem>
          </Menu>
          <Progress percent={20} />
        </div>
      </ConfigProvider>
    </div>
  );
}

export default App;
