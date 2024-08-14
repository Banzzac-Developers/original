import CarouselContext, { Carousel } from "@/components/Carousel";
import sampleImage1 from "@/assets/images/Pet.jpg";
import sampleImage2 from "@/assets/images/User.png";
import sampleImage3 from "@/assets/images/sample_image.jpeg";
import sampleImage4 from "@/assets/images/sample2.jpg";
import styled from "@emotion/styled";

export default function Profile() {
  return (
    <Container>
      <CarouselContext>
        <Carousel.Indicator imagesLength={4} />
        <div style={{ height: "30px" }} />
        <Carousel.Slider
          images={[sampleImage1, sampleImage2, sampleImage3, sampleImage4]}
        />
      </CarouselContext>
    </Container>
  );
}

const Container = styled.div`
  padding: 26px 0;
`;
