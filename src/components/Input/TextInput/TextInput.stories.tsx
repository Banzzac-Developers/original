import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextInput from ".";

const meta: Meta<typeof TextInput> = {
  title: "components/Input/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select", options: ["text", "email", "tel", "search"] },
    },
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text here...",
  },
};

export const WithOnChange: Story = {
  args: {
    type: "text",
    placeholder: "Type something...",
  },
  render: (args) => {
    const [value, setValue] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      args.onChange?.(e); // This will trigger the action in Storybook
    };

    return <TextInput {...args} value={value} onChange={handleChange} />;
  },
};
