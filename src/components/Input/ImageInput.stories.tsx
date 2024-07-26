import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import ImageInput, { Props } from "./ImageInput";

export default {
  title: "components/Input/ImageInput",
  component: ImageInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<Props> = (args) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ImageInput {...args} imgSrc={imgSrc} onChangeImage={handleImageChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Upload Image",
};
