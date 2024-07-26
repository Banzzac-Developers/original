import ButtonSelect from "@/components/Input/ButtonSelect";
import ImageInput from "@/components/Input/ImageInput";
import Seperator from "@/components/Seperator";
import styled from "@emotion/styled";
import { PetInfo } from "@/models/signup";
import { SetStateAction, useCallback } from "react";
import RoundButton from "@/components/Button/RoundButton";
import {
  PET_BREED,
  GENDER,
  NEUTRALIZATION,
  PET_SIZE,
  PET_PERSONALITY,
  PET_ACTIVITY,
} from "@/constants";
import TextInput from "@/components/Input/TextInput";

interface Props {
  petInfo: PetInfo;
  handleChange: (
    targetIdx: number,
    key: keyof PetInfo,
    value: string | number | number[] | File,
  ) => void;
  currentIdx: number;
  setPetInfos: React.Dispatch<SetStateAction<PetInfo[]>>;
}

export default function PetInfoForm({
  petInfo,
  handleChange,
  currentIdx,
  setPetInfos,
}: Props) {
  const handleDeletePet = useCallback(() => {
    setPetInfos((prev) => prev.filter((_, idx) => idx !== currentIdx));
  }, [currentIdx, setPetInfos]);

  const handleChangeImage = (image: File | undefined) => {
    if (image) {
      handleChange(currentIdx, "petImage", image);
    }
  };

  return (
    <>
      <ImageInput
        image={petInfo.petImage}
        onChangeImage={handleChangeImage}
        label="사진"
      />
      <Seperator height={24} />
      <InputWrapper>
        <TextInput.Label id={`pet-age__${currentIdx + 1}`}>
          나이
        </TextInput.Label>
        <TextInput.Input
          maxLength={4}
          type="text"
          inputMode="numeric"
          id={`pet-age__${currentIdx + 1}`}
          placeholder="출생년도"
          name={`pet-age__${currentIdx + 1}`}
          value={petInfo.age}
          onChange={(e) => handleChange(currentIdx, "age", e.target.value)}
        />
      </InputWrapper>
      <Seperator height={24} />
      <InputWrapper>
        <TextInput.Label id={`pet-name__${currentIdx + 1}`}>
          이름
        </TextInput.Label>
        <TextInput.Input
          maxLength={10}
          type="text"
          inputMode="numeric"
          id={`pet-name__${currentIdx + 1}`}
          placeholder="직접입력"
          name={`pet-name__${currentIdx + 1}`}
          value={petInfo.name}
          onChange={(e) => handleChange(currentIdx, "name", e.target.value)}
        />
      </InputWrapper>
      <Seperator height={24} />
      <InputWrapper>
        <TextInput.Label id={`pet-weight__${currentIdx + 1}`}>
          몸무게
        </TextInput.Label>
        <TextInput.Input
          maxLength={2}
          type="text"
          inputMode="numeric"
          id={`pet-weight__${currentIdx + 1}`}
          placeholder="직접입력"
          name={`pet-weight__${currentIdx + 1}`}
          value={petInfo.weight}
          onChange={(e) => handleChange(currentIdx, "weight", e.target.value)}
        />
      </InputWrapper>
      <Seperator height={24} />
      <ButtonSelection
        label="성별"
        buttonList={GENDER.map((v) => v.name)}
        value={petInfo.gender}
        onChangeButton={(idx) => handleChange(currentIdx, "gender", idx)}
        multipleSelection={false}
        maxSelection={1}
      />
      <Seperator height={24} />
      <ButtonSelection
        label="중성화"
        buttonList={NEUTRALIZATION}
        value={petInfo.neutralization}
        onChangeButton={(idx) =>
          handleChange(currentIdx, "neutralization", idx)
        }
        multipleSelection={false}
        maxSelection={1}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="크기"
        buttonList={PET_SIZE.map((v) => v.name)}
        value={petInfo.size}
        onChangeButton={(idx) => handleChange(currentIdx, "size", idx)}
        multipleSelection={false}
        maxSelection={1}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px 8px",
        }}
        label="견종"
        buttonList={PET_BREED}
        value={petInfo.breed}
        onChangeButton={(idx) => handleChange(currentIdx, "breed", idx)}
        multipleSelection={false}
        maxSelection={1}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px 8px",
        }}
        label="성격"
        buttonList={PET_PERSONALITY.map((v) => v.name)}
        value={petInfo.personality}
        onChangeButton={(idxArr) =>
          handleChange(currentIdx, "personality", idxArr)
        }
        multipleSelection
        maxSelection={6}
      />
      <Seperator height={24} />
      <ButtonSelect
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="활동량"
        buttonList={PET_ACTIVITY.map((v) => v.name)}
        value={petInfo.activity}
        onChangeButton={(idx) => handleChange(currentIdx, "activity", idx)}
        multipleSelection={false}
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeletePetButtonWrapper = styled.div`
  width: 100%;
`;
