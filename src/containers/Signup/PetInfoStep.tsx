import SquareButton from "@/components/Button/SquareButton";
import RoundHeader from "@/components/Header/RoundHeader";
import { defaultPetInfo, PetInfo } from "@/models/signup";
import styled from "@emotion/styled";
import { SetStateAction, useCallback } from "react";
import PetInfoForm from "./PetInfoForm";
import DividerDefault from "@/components/Divider/Divider";
import Seperator from "@/components/Seperator";
import RoundButton from "@/components/Button/RoundButton";
import React from "react";
import SvgSelector from "@/components/Svg/SvgSelector";

interface Props {
  onNext: () => void;
  onBefore: () => void;
  petInfos: PetInfo[];
  setPetInfos: React.Dispatch<SetStateAction<PetInfo[]>>;
}

export default function PetInfoStep({
  onNext,
  onBefore,
  petInfos,
  setPetInfos,
}: Props) {
  const getNewPetInfo = useCallback(
    (
      targetPetInfo: PetInfo,
      key: keyof PetInfo,
      value: string | number | number[] | File,
    ) => ({ ...targetPetInfo, [key]: value }),
    [],
  );

  const handleChangePetInfos = useCallback(
    (
      targetIdx: number,
      key: keyof PetInfo,
      value: string | number | number[] | File,
    ) => {
      setPetInfos((prevPetInfos) => {
        const newPetInfo = getNewPetInfo(prevPetInfos[targetIdx], key, value);
        const newPetInfos = prevPetInfos.map((prevPetInfo, idx) =>
          idx === targetIdx ? newPetInfo : prevPetInfo,
        );
        return newPetInfos;
      });
    },
    [getNewPetInfo, setPetInfos],
  );

  const handleAddPet = useCallback(() => {
    if (petInfos.length >= 10) return;
    setPetInfos((prev) => [...prev, defaultPetInfo]);
  }, [petInfos.length, setPetInfos]);

  return (
    <>
      <RoundHeader icon="dogFace" description="반려견의 정보를 입력해주세요" />
      <Container>
        {petInfos.map((petInfo, idx) => (
          <React.Fragment key={idx}>
            <PetInfoForm
              petInfo={petInfo}
              handleChangePetInfos={handleChangePetInfos}
              currentIdx={idx}
              setPetInfos={setPetInfos}
            />
            <Divider width="100%" color="#e0e0e0" />
          </React.Fragment>
        ))}
        <AddPetButton
          backgroundColor="#212121"
          title={
            <>
              <SvgSelector
                stroke="#212121"
                svg="filledAddRound"
                width={24}
                height={24}
              />
              <span>반려견 추가</span>
            </>
          }
          fill={false}
          onClick={handleAddPet}
        />
        <Seperator height={24} />
        <ButtonContainer>
          <SquareButton
            title={"이전"}
            onClick={onBefore}
            fill={false}
            backgroundColor="#212121"
          />
          <SquareButton
            type="submit"
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
  align-items: center;
  width: 100%;
`;

const Divider = styled(DividerDefault)`
  margin: 24px 0;
`;

const AddPetButton = styled(RoundButton)`
  width: fit-content;
  span {
    margin-left: 8px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
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
