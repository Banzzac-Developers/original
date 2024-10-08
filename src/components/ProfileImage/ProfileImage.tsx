import { isTherePetImage, isThereUserImage } from "@/utils/ImageInit";
import styled from "@emotion/styled";

type Props = {
  size: number;
  border: number;
  left?: number;
  img: string;
  img2: string;
  borderColor?: string;
};

export const DoubleProfileImage = ({
  size,
  border,
  img,
  img2,
  left = 0,
  borderColor = "white",
}: Props) => {
  // 이미지 없을 경우 기본 이미지로 초기화
  const userImg = isThereUserImage(img);
  const petImg = isTherePetImage(img2);
  return (
    <Container>
      <MemberImage
        src={userImg}
        size={size}
        border={border}
        borderColor={borderColor}
      />
      <DogImage
        src={petImg}
        size={size}
        border={border}
        left={left}
        borderColor={borderColor}
      />
    </Container>
  );
};

type Props2 = {
  size: number;
  border: number;
  img: string;
  borderColor: string;
};
export const SingleProfileImage = ({
  size,
  border,
  img,
  borderColor,
}: Props2) => {
  const userImg = isThereUserImage(img);
  return (
    <Container>
      <MemberImage
        src={userImg}
        size={size}
        border={border}
        borderColor={borderColor}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const MemberImage = styled.img<{
  size: number;
  border: number;
  borderColor: string;
}>`
  position: relative;
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};
  border-radius: ${({ size }) => size / 2 + "px"};
  border: ${({ border }) => border + "px"} solid
    ${({ borderColor }) => borderColor};
  z-index: 1;
`;
const DogImage = styled.img<{
  size: number;
  border: number;
  left: number;
  borderColor: string;
}>`
  position: absolute;
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};
  border-radius: ${({ size }) => size / 2 + "px"};
  border: ${({ border }) => border + "px"} solid
    ${({ borderColor }) => borderColor};
  left: ${({ left }) => left + "px"};
`;
