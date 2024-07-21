import SquareButton from "@/components/Button/SquareButton";
import RoundHeader from "@/components/Header/RoundHeader";
import InputDefault from "@/components/Input";
import ButtonSelect from "@/components/Input/ButtonSelect";
import ImageInput from "@/components/Input/ImageInput";
import Seperator from "@/components/Seperator";
import { PetInfo } from "@/models/signup";
import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";

interface Props {
  onNext: () => void;
  onBefore: () => void;
  petInfo: PetInfo;
  setPetInfo: React.Dispatch<SetStateAction<PetInfo>>;
}

export default function PetInfoStep({
  onNext,
  onBefore,
  petInfo,
  setPetInfo,
}: Props) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (
    key: keyof PetInfo,
    value: string | number | number[],
  ) => {
    setPetInfo((prev) => ({ ...prev, [key]: value }));
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
      <RoundHeader icon="dogFace" description="반려견의 정보를 입력해주세요" />
      <Container>
        <div>
          <ImageInput
            imgSrc={imagePreview}
            onChangeImage={handleImageUpload}
            label="사진"
          />
          <InputDefault
            title="나이"
            id="age"
            placeholder="출생년도"
            value={petInfo.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
          <Seperator height={24} />
          <InputDefault
            title="이름"
            placeholder="직접입력"
            id="name"
            value={petInfo.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <Seperator height={24} />
          <InputDefault
            title="몸무게"
            placeholder="직접입력"
            id="weight"
            value={petInfo.weight}
            onChange={(e) => handleChange("weight", e.target.value)}
          />
          <Seperator height={24} />
          <ButtonSelection
            label="성별"
            buttonList={["남자", "여자"]}
            value={[petInfo.gender]}
            onChangeButton={(idxArr) => handleChange("gender", idxArr[0])}
            isDuplicate={false}
            maxSelection={1}
          />
          <Seperator height={24} />
          <ButtonSelection
            label="중성화"
            buttonList={["네", "아니요"]}
            value={[petInfo.neutralization]}
            onChangeButton={(idxArr) =>
              handleChange("neutralization", idxArr[0])
            }
            isDuplicate={false}
            maxSelection={1}
          />
          <Seperator height={24} />
          <ButtonSelection
            gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
            label="크기"
            buttonList={["소형", "중형", "대형"]}
            value={[petInfo.size]}
            onChangeButton={(idxArr) => handleChange("size", idxArr[0])}
            isDuplicate={false}
            maxSelection={1}
          />
          <Seperator height={24} />
          <ButtonSelection
            gridStyle={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px 8px",
            }}
            label="견종"
            buttonList={[
              "믹스",
              "말티즈",
              "푸들",
              "포메라니안",
              "치와와",
              "시츄",
              "골든리트리버",
              "진돗개",
              "비글",
            ]}
            value={[petInfo.breed]}
            onChangeButton={(idxArr) => handleChange("breed", idxArr[0])}
            isDuplicate={false}
            maxSelection={1}
          />
          <Seperator height={24} />
          <ButtonSelection
            gridStyle={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px 8px",
            }}
            label="성격"
            buttonList={[
              "외향적",
              "에너제틱",
              "사회성  좋은",
              "내향적",
              "얌전한",
              "샤이한",
            ]}
            value={petInfo.personality}
            onChangeButton={(idxArr) => handleChange("personality", idxArr)}
            isDuplicate
            maxSelection={6}
          />
          <Seperator height={24} />
          <ButtonSelect
            gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
            label="활동량"
            buttonList={["적음", "보통", "많음"]}
            value={[petInfo.activity]}
            onChangeButton={(idxArr) => handleChange("activity", idxArr[0])}
            isDuplicate={false}
            maxSelection={1}
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
  min-height: 100%;
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
