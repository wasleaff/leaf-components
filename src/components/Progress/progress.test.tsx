import { render, screen } from "@testing-library/react";
import Progress from "./progress";

test("Progress component renders with correct progress value", () => {
  const percent = 50;
  const text = `${percent}%`;

  render(<Progress percent={percent} showText={true} />);

  const progressBarElement = screen.getByTestId("progress");

  // 判断进度条是否正确渲染，并且进度值与传入的属性一致
  expect(progressBarElement).toBeInTheDocument();

  // 判断文本是否出现在进度条组件中
  const textElement = screen.queryAllByText(text);
  // 判断元素是否存在
  expect(textElement[0]).toBeInTheDocument();

  // 判断元素的文本内容是否与预期值匹配
  expect(textElement[0]).toHaveTextContent(text);
});

test("ProgressBar component applies custom styles correctly", () => {
  const progressValue = 75;
  const customStyles = {
    backgroundColor: "red",
    height: "10px",
  };
  render(<Progress percent={progressValue} styles={customStyles} />);
  const progressBarElement = screen.getByTestId("progress");
  // 判断进度条是否应用了自定义样式
  expect(progressBarElement).toHaveStyle(
    `background-color: ${customStyles.backgroundColor}`
  );
  expect(progressBarElement).toHaveStyle(`height: ${customStyles.height}`);
});
