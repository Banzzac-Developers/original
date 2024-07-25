import SquareButton from "@/components/Button/SquareButton";
import InputDefault from "@/components/Input";
import ButtonSelect from "@/components/Input/ButtonSelect";
import Seperator from "@/components/Seperator";
import { GENDER } from "@/constants";
import { UserInfo } from "@/models/signup";
import styled from "@emotion/styled";
import { SetStateAction } from "react";

interface Props {
  onNext: () => void;
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<SetStateAction<UserInfo>>;
}

export default function UserInfoStep({ onNext, setUserInfo, userInfo }: Props) {
  const handleChange = (
    key: keyof UserInfo,
    value: string | number | number[],
  ) => {
    setUserInfo((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Container>
      <div>
        <Title>회원가입</Title>
        <Seperator height={50} />
        <InputDefault
          onChange={(e) => handleChange("email", e.target.value)}
          value={userInfo.email}
          title="이메일"
          placeholder="banzzac@gmail.com"
          id="email"
        />
        <Seperator height={28} />
        <InputDefault
          onChange={(e) => handleChange("nickname", e.target.value)}
          value={userInfo.nickname}
          title="닉네임"
          placeholder="8~30자리 영문"
          id="nickname"
        />
        <Seperator height={28} />
        <ButtonSelect
          label="성별"
          buttonList={GENDER.map((v) => v.name)}
          multipleSelection={false}
          maxSelection={1}
          onChangeButton={(idx) => handleChange("gender", idx)}
          value={userInfo.gender}
        />
        <Seperator height={28} />
        <InputDefault
          onChange={(e) => handleChange("age", e.target.value)}
          value={userInfo.age}
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
