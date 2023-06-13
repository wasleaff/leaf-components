import AutoComplete from "./components/AutoComplete/autoComplete";

function App() {
  return (
    <div className="App" style={{ margin: "15px" }}>
      <h2>添加测试用例：</h2>
      <AutoComplete
        size="sm"
        fetchSuggestions={() => {
          return [
            { value: "a" },
            { value: "b" },
            { value: "c" },
            { value: "d" },
          ];
        }}
      ></AutoComplete>
    </div>
  );
}

export default App;
