import type { Meta, StoryObj } from "@storybook/react";
import CarouselContext, { Carousel } from ".";
import sampleImage1 from "@/assets/images/Pet.jpg";
import sampleImage2 from "@/assets/images/User.png";
import sampleImage3 from "@/assets/images/sample_image.jpeg";
import sampleImage4 from "@/assets/images/sample2.jpg";

const meta = {
  title: "components/Carousel",
  component: CarouselContext,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CarouselContext>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarouselComponent: Story = {
  args: {
    children: (
      <>
        <Carousel.Indicator imagesLength={4} />
        <div style={{ height: "20px" }} />
        <Carousel.Slider
          images={[sampleImage1, sampleImage2, sampleImage3, sampleImage4]}
        />
      </>
    ),
  },
};
