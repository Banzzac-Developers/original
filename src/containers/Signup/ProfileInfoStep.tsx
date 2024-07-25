import SquareButton from "@/components/Button/SquareButton";
import RoundHeader from "@/components/Header/RoundHeader";
import ButtonSelect from "@/components/Input/ButtonSelect";
import ImageInput from "@/components/Input/ImageInput";
import Seperator from "@/components/Seperator";
import { ProfileInfo } from "@/models/signup";
import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";

interface Props {
  onNext: () => void;
  onBefore: () => void;
  profileInfo: ProfileInfo;
  setProfileInfo: React.Dispatch<SetStateAction<ProfileInfo>>;
}

export default function ProfileInfoStep({
  onNext,
  onBefore,
  setProfileInfo,
  profileInfo,
}: Props) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (key: keyof ProfileInfo, value: number[]) => {
    setProfileInfo((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      if (reader.error) {
        alert("image upload error");
      }
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
    }
  };

  return (
    <>
      <RoundHeader icon="face" description="보호자의 정보를 입력해주세요" />
      <Container>
        <div>
          <ImageInput
            imgSrc={imagePreview}
            onChangeImage={handleImageUpload}
            label="사진"
          />
          <ButtonSelection
            gridStyle={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "8px 4px",
            }}
            maxSelection={4}
            label="mbti"
            buttonList={["E", "S", "F", "J", "I", "N", "T", "P"]}
            multipleSelection
            value={profileInfo.mbti}
            onChangeButton={(idxArr) => handleChange("mbti", idxArr)}
          />
          <Seperator height={48} />
          <ButtonSelection
            gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
            multipleSelection
            buttonList={[
              "많이 걷는",
              "앉아서 쉬는",
              "대화를 하는",
              "대화가 적은",
              "산책이 능숙한",
            ]}
            maxSelection={5}
            label="산책 스타일"
            value={profileInfo.walkingStyle}
            onChangeButton={(idxArr) => handleChange("walkingStyle", idxArr)}
          />
        </div>
        <ButtonContainer>
          <SquareButton
            title={"이전"}
            onClick={onBefore}
            fill={false}
            backgroundColor="#212121"
          />
          <SquareButton
            title={"다음"}
            fill
            backgroundColor="#212121"
            onClick={onNext}
          />
        </ButtonContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 62px 24px;
  min-height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
`;

const ButtonSelection = styled(ButtonSelect)`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  button {
    padding: 13px 0;
  }
  button:nth-of-type(1) {
    flex: 1;
    border: 2px solid #212121;
  }
  button:nth-of-type(2) {
    flex: 2;
  }
`;
