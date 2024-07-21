import SquareButton from "@/components/Button/SquareButton";
import InputDefault from "@/components/Input";
import ButtonSelect from "@/components/Input/ButtonSelect";
import Seperator from "@/components/Seperator";
import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  onNext: () => void;
  onBefore: () => void;
}

export default function PetInfo({ onNext, onBefore }: Props) {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState(-1);
  const [neutralization, setNeutralization] = useState(-1);
  const [size, setSize] = useState(-1);
  const [breed, setBreed] = useState(-1);
  const [personality, setPersonality] = useState<number[]>([]);
  const [activity, setActivity] = useState(-1);

  return (
    <Container>
      <div>
        <div>사진</div>
        <InputDefault
          title="나이"
          id="age"
          placeholder="출생년도"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Seperator height={24} />
        <InputDefault
          title="이름"
          placeholder="직접입력"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Seperator height={24} />
        <InputDefault
          title="몸무게"
          placeholder="직접입력"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <Seperator height={24} />
        <ButtonSelection
          label="성별"
          buttonList={["남자", "여자"]}
          value={[gender]}
          onChangeButton={(idxArr) => setGender(idxArr[0])}
          isDuplicate={false}
          maxSelection={1}
        />
        <Seperator height={24} />

        <ButtonSelection
          label="중성화"
          buttonList={["네", "아니요"]}
          value={[neutralization]}
          onChangeButton={(idxArr) => setNeutralization(idxArr[0])}
          isDuplicate={false}
          maxSelection={1}
        />
        <Seperator height={24} />
        <ButtonSelection
          gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
          label="크기"
          buttonList={["소형", "중형", "대형"]}
          value={[size]}
          onChangeButton={(idxArr) => setSize(idxArr[0])}
          isDuplicate={false}
          maxSelection={1}
        />
        <Seperator height={24} />
        <ButtonSelection
          gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px 8px" }}
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
          value={[breed]}
          onChangeButton={(idxArr) => setBreed(idxArr[0])}
          isDuplicate={false}
          maxSelection={1}
        />
        <Seperator height={24} />
        <ButtonSelection
          gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px 8px" }}
          label="성격"
          buttonList={[
            "외향적",
            "에너제틱",
            "사회성  좋은",
            "내향적",
            "얌전한",
            "샤이한",
          ]}
          value={personality}
          onChangeButton={(idxArr) => setPersonality(idxArr)}
          isDuplicate
          maxSelection={6}
        />
        <Seperator height={24} />
        <ButtonSelect
          gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
          label="활동량"
          buttonList={["적음", "보통", "많음"]}
          value={[activity]}
          onChangeButton={(idxArr) => setActivity(idxArr[0])}
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
