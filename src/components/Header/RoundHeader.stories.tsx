import type { Meta, StoryObj } from "@storybook/react";
import RoundHeader from "./RoundHeader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/Header/RoundHeader",
  component: RoundHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // txt: { type: "string" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof RoundHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchButton: Story = {
  args: {
    icon: "face",
    description: "보호자의 정보를 입력해주세요",
  },
};
