import Seperator from "@/components/Seperator";
import styled from "@emotion/styled";
import { useRef } from "react";
import SvgSelector from "../Svg/SvgSelector";

type Props = {
  label: string;
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imgSrc: string | null;
};

export default function ImageInput({ label, onChangeImage, imgSrc }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Container>
      <Label>{label}</Label>
      <Seperator height={10} />
      <ImageUploadContainer>
        <ImagePreview onClick={() => fileInputRef.current?.click()}>
          {imgSrc ? (
            <img src={imgSrc} alt="Uploaded" />
          ) : (
            <SvgSelector
              svg="filledAddRound"
              width={24}
              height={24}
              stroke="#212121"
            />
          )}
        </ImagePreview>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={onChangeImage}
          accept="image/*"
        />
      </ImageUploadContainer>
    </Container>
  );
}

const Container = styled.div``;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #000;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagePreview = styled.div`
  width: 208px;
  height: 208px;
  border-radius: 50%;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 2px 6px 2px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004d;
  border: 4px solid #fff;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
