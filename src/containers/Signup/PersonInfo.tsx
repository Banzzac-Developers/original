import SquareButton from "@/components/Button/SquareButton";
import ButtonSelect from "@/components/Input/ButtonSelect";
import Seperator from "@/components/Seperator";
import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  onNext: () => void;
  onBefore: () => void;
}

export default function PersonInfo({ onNext, onBefore }: Props) {
  const [mbti, setMbti] = useState<number[]>([]);
  const [walkingStyle, setWalkingStyle] = useState<number[]>([]);

  return (
    <Container>
      <div>
        <label>사진</label>
        <img />
        <ButtonSelection
          gridStyle={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "8px 4px" }}
          maxSelection={4}
          label="mbti"
          buttonList={["E", "S", "F", "J", "I", "N", "T", "P"]}
          isDuplicate
          value={mbti}
          onChangeButton={(idxArr) => setMbti(idxArr)}
        />
        <Seperator height={48} />
        <ButtonSelection
          gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
          isDuplicate
          buttonList={[
            "많이 걷는",
            "앉아서 쉬는",
            "대화를 하는",
            "대화가 적은",
            "산책이 능숙한",
          ]}
          maxSelection={5}
          label="산책 스타일"
          value={walkingStyle}
          onChangeButton={(idxArr) => setWalkingStyle(idxArr)}
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
