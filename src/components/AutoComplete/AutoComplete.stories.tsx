// Button.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete } from "./autoComplete";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: AutoComplete,
  tags: ["autodocs"],
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    fetchSuggestions: () => {
      return [{ value: "a" }, { value: "b" }];
    },
  },
  render: ({ fetchSuggestions }) => (
    <AutoComplete fetchSuggestions={fetchSuggestions}></AutoComplete>
  ),
};

export const RenderOption: Story = {
  args: {
    fetchSuggestions: () => {
      return [{ value: "a" }, { value: "b" }];
    },
    renderOption: (item) => {
      return <h5>{item.value}</h5>;
    },
  },
  render: ({ fetchSuggestions, renderOption }) => (
    <AutoComplete
      fetchSuggestions={fetchSuggestions}
      renderOption={renderOption}
    ></AutoComplete>
  ),
};
