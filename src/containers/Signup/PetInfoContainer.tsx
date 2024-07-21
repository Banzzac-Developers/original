import InputDefault from "@/components/Input";
import ButtonSelect from "@/components/Input/ButtonSelect";
import ImageInput from "@/components/Input/ImageInput";
import Seperator from "@/components/Seperator";
import styled from "@emotion/styled";
import { PetInfo } from "@/models/signup";
import { SetStateAction, useCallback, useState } from "react";
import RoundButton from "@/components/Button/RoundButton";

interface Props {
  petInfo: PetInfo;
  handleChange: (
    targetIdx: number,
    key: keyof PetInfo,
    value: string | number | number[],
  ) => void;
  currentIdx: number;
  setPetInfos: React.Dispatch<SetStateAction<PetInfo[]>>;
}

export default function PetInfoContainer({
  petInfo,
  handleChange,
  currentIdx,
  setPetInfos,
}: Props) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  const handleDeletePet = useCallback(() => {
    setPetInfos((prev) => prev.filter((_, idx) => idx !== currentIdx));
  }, [currentIdx, setPetInfos]);

  return (
    <>
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
        onChange={(e) => handleChange(currentIdx, "age", e.target.value)}
      />
      <Seperator height={24} />
      <InputDefault
        title="이름"
        placeholder="직접입력"
        id="name"
        value={petInfo.name}
        onChange={(e) => handleChange(currentIdx, "name", e.target.value)}
      />
      <Seperator height={24} />
      <InputDefault
        title="몸무게"
        placeholder="직접입력"
        id="weight"
        value={petInfo.weight}
        onChange={(e) => handleChange(currentIdx, "weight", e.target.value)}
      />
      <Seperator height={24} />
      <ButtonSelection
        label="성별"
        buttonList={["남자", "여자"]}
        value={[petInfo.gender]}
        onChangeButton={(idxArr) =>
          handleChange(currentIdx, "gender", idxArr[0])
        }
        isDuplicate={false}
        maxSelection={1}
      />
      <Seperator height={24} />
      <ButtonSelection
        label="중성화"
        buttonList={["네", "아니요"]}
        value={[petInfo.neutralization]}
        onChangeButton={(idxArr) =>
          handleChange(currentIdx, "neutralization", idxArr[0])
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
        onChangeButton={(idxArr) => handleChange(currentIdx, "size", idxArr[0])}
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
        onChangeButton={(idxArr) =>
          handleChange(currentIdx, "breed", idxArr[0])
        }
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
        onChangeButton={(idxArr) =>
          handleChange(currentIdx, "personality", idxArr)
        }
        isDuplicate
        maxSelection={6}
      />
      <Seperator height={24} />
      <ButtonSelect
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="활동량"
        buttonList={["적음", "보통", "많음"]}
        value={[petInfo.activity]}
        onChangeButton={(idxArr) =>
          handleChange(currentIdx, "activity", idxArr[0])
        }
        isDuplicate={false}
        maxSelection={1}
      />
      <Seperator height={24} />
      {currentIdx >= 1 && (
        <DeletePetButtonWrapper>
          <RoundButton
            title="반려견 삭제"
            onClick={handleDeletePet}
            fill
            backgroundColor="#212121"
          />
        </DeletePetButtonWrapper>
      )}
    </>
  );
}

const ButtonSelection = styled(ButtonSelect)`
  width: 100%;
`;

const DeletePetButtonWrapper = styled.div`
  width: 100%;
`;
