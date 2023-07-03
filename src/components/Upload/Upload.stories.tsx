import type { Meta, StoryObj } from "@storybook/react";
import { Upload } from "./upload";
import { Button } from "../Button/button";

import { Icon } from "../Icon/icon";

const meta: Meta<typeof Upload> = {
  component: Upload,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 👇 The UploadTemplate construct will be spread to the existing stories.
const UploadTemplate: Story = {
  render: ({ children, action, ...args }) => {
    return <Upload action={action}>{children}</Upload>;
  },
};

export const ButtonUpload = {
  // ...UploadTemplate,
  args: {
    action: "http://uplaod/adress",
  },

  render: (args: { action: string }) => {
    return (
      <Upload {...args}>
        <Button>点击上传</Button>
      </Upload>
    );
  },
};

export const BeforeUpload = {
  // ...UploadTemplate,
  args: {
    beforeUpload: (file: File) => {
      if (Math.round(file.size / 1024) > 5) {
        alert("文件太大，请重新选择...");
        return false;
      }
      return true;
    },
    action: "http://uplaod/adress",
  },
  render: (args: { action: string }) => {
    return (
      <Upload {...args}>
        <Button>上传文件大小不超过5kb</Button>
      </Upload>
    );
  },
};

export const AcceptUpload = {
  // ...UploadTemplate,
  args: {
    accept: ".jpg",
    action: "http://uplaod/adress",
  },
  render: (args: { action: string }) => {
    return (
      <Upload {...args}>
        <Button>点击上传,只显示可接受的文件</Button>
      </Upload>
    );
  },
};

export const MultipleUpload = {
  // ...UploadTemplate,
  args: {
    multiple: true,
    action: "http://uplaod/adress",
  },
  render: (args: { action: string }) => {
    return (
      <Upload {...args}>
        <Button>点击多选上传</Button>
      </Upload>
    );
  },
};

export const DragUpload = {
  // ...UploadTemplate,
  args: {
    drag: true,
    action: "http://uplaod/adress",
  },
  render: (args: { action: string }) => {
    return (
      <Upload {...args}>
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        拖拽文件到此或点击上传
      </Upload>
    );
  },
};
