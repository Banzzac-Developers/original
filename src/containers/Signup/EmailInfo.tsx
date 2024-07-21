import SquareButton from "@/components/Button/SquareButton";
import InputDefault from "@/components/Input";
import ButtonSelect from "@/components/Input/ButtonSelect";
import Seperator from "@/components/Seperator";
import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  onNext: () => void;
}

export default function EmailInfo({ onNext }: Props) {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [sex, setSex] = useState(-1);
  const [age, setAge] = useState("");

  return (
    <Container>
      <div>
        <Title>회원가입</Title>
        <Seperator height={50} />
        <InputDefault
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          title="이메일"
          placeholder="banzzac@gmail.com"
          id="email"
        />
        <Seperator height={28} />
        <InputDefault
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
          title="닉네임"
          placeholder="8~30자리 영문"
          id="nickname"
        />
        <Seperator height={28} />
        <ButtonSelect
          label="성별"
          buttonList={["남자", "여자"]}
          isDuplicate={false}
          maxSelection={1}
          onChangeButton={(idxArr) => setSex(idxArr[0])}
          value={[sex]}
        />
        <Seperator height={28} />
        <InputDefault
          onChange={(e) => setAge(e.target.value)}
          value={age}
          title="나이"
          placeholder="출생년도"
          id="age"
        />
        <Seperator height={50} />
      </div>
      <NextButton
        title="다음"
        fill
        backgroundColor="#212121"
        onClick={onNext}
      />
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

const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #000;
  line-height: 24px;
`;

const NextButton = styled(SquareButton)`
  width: 100%;
  padding: 13px 0;
`;
