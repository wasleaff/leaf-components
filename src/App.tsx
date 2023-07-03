import Icon from "./components/Icon/icon";
import { Upload } from "./components/Upload/upload";

function App() {
  return (
    <div className="App" style={{ margin: "15px" }}>
      <h2>添加测试用例：</h2>
      <Upload action=" ">
        <button>anniu</button>
      </Upload>

      <h2>添加测试用例：</h2>
      <Icon icon="file-alt" theme="secondary" />
      <Icon icon="check-circle" theme="success" />
      <Icon icon="spinner" spin theme="primary" />
      <Icon icon="times-circle" theme="danger" />
    </div>
  );
}

export default App;
