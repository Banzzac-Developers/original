import SquareButton from "@/components/Button/SquareButton";
import RoundHeader from "@/components/Header/RoundHeader";
import { defaultPetInfo, PetInfo } from "@/models/signup";
import styled from "@emotion/styled";
import { SetStateAction, useCallback } from "react";
import PetInfoContainer from "./PetInfoContainer";
import DividerDefault from "@/components/Divider/Divider";
import Seperator from "@/components/Seperator";
import RoundButton from "@/components/Button/RoundButton";

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
      value: string | number | number[],
    ) => {
      return { ...targetPetInfo, [key]: value };
    },
    [],
  );

  const handleChangePetInfos = useCallback(
    (
      targetIdx: number,
      key: keyof PetInfo,
      value: string | number | number[],
    ) => {
      setPetInfos((prevPetInfos) => {
        const newPetInfo = getNewPetInfo(prevPetInfos[targetIdx], key, value);
        return prevPetInfos.map((prevPetInfo, idx) =>
          idx === targetIdx ? newPetInfo : prevPetInfo,
        );
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
          <div key={idx}>
            <PetInfoContainer
              petInfo={petInfo}
              handleChange={handleChangePetInfos}
              currentIdx={idx}
              setPetInfos={setPetInfos}
            />
            <Divider width="100%" color="#e0e0e0" />
          </div>
        ))}
        <RoundButton
          backgroundColor="#212121"
          title="반려견 추가"
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
`;

const Divider = styled(DividerDefault)`
  margin: 24px 0;
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
