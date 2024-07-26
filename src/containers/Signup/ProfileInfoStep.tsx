import SquareButton from "@/components/Button/SquareButton";
import RoundHeader from "@/components/Header/RoundHeader";
import ButtonSelect from "@/components/Input/ButtonSelect";
import ImageInput from "@/components/Input/ImageInput";
import Seperator from "@/components/Seperator";
import { MBTI, WALKING_STYLE } from "@/constants";
import { ProfileInfo } from "@/models/signup";
import styled from "@emotion/styled";
import { SetStateAction, useCallback } from "react";

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
  const handleChangeInfo = useCallback(
    (key: keyof ProfileInfo, value: number | number[]) => {
      setProfileInfo((prev) => ({ ...prev, [key]: value }));
    },
    [setProfileInfo],
  );

  const handleChangeImage = useCallback(
    (image: File | undefined) => {
      setProfileInfo((prev) => ({ ...prev, profileImage: image }));
    },
    [setProfileInfo],
  );

  return (
    <>
      <RoundHeader icon="face" description="보호자의 정보를 입력해주세요" />
      <Container>
        <div>
          <ImageInput
            image={profileInfo.profileImage}
            onChangeImage={handleChangeImage}
            label="사진"
          />
          <ButtonSelection
            gridStyle={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "8px 4px",
            }}
            maxSelection={4}
            label="mbti"
            buttonList={MBTI}
            multipleSelection
            value={profileInfo.mbti}
            onChangeButton={(idxArr) => handleChangeInfo("mbti", idxArr)}
          />
          <Seperator height={48} />
          <ButtonSelection
            gridStyle={{ gridTemplateColumns: "repeat(3, 108px)", gap: "10px" }}
            multipleSelection={false}
            buttonList={WALKING_STYLE.map((v) => v.name)}
            maxSelection={1}
            label="산책 스타일"
            value={profileInfo.walkingStyle}
            onChangeButton={(idx) => handleChangeInfo("walkingStyle", idx)}
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
