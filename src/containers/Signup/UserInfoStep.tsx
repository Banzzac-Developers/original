import SquareButton from "@/components/Button/SquareButton";
import LabelledButtonSelect from "@/components/Input/LabelledButtonSelect";
import TextInput from "@/components/Input/TextInput";
import Label from "@/components/Label";
import Seperator from "@/components/Seperator";
import { GENDER } from "@/constants";
import { UserInfo } from "@/models/signup";
import styled from "@emotion/styled";
import { SetStateAction, useCallback } from "react";

interface Props {
  onNext: () => void;
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<SetStateAction<UserInfo>>;
}

export default function UserInfoStep({ onNext, setUserInfo, userInfo }: Props) {
  const validateAge = (value: string) => {
    return value.match(/^\d+$/) || value === "";
  };
  const handleChangeInfo = useCallback(
    (key: keyof UserInfo, value: string | number | number[]) => {
      if (key === "age") {
        if (!validateAge(value as string)) return;
      }
      setUserInfo((prev) => ({ ...prev, [key]: value }));
    },
    [setUserInfo],
  );

  return (
    <Container>
      <div>
        <Title>회원가입</Title>
        <Seperator height={50} />
        <InputWrapper>
          <Label htmlFor="email">이메일</Label>
          <TextInput
            inputMode="email"
            type="text"
            onChange={(e) => handleChangeInfo("email", e.target.value)}
            value={userInfo.email}
            placeholder="banzzac@gmail.com"
            id="email"
            name="email"
          />
        </InputWrapper>
        <Seperator height={28} />
        <InputWrapper>
          <Label htmlFor="nickname">닉네임</Label>
          <TextInput
            inputMode="text"
            maxLength={15}
            type="text"
            onChange={(e) => handleChangeInfo("nickname", e.target.value)}
            value={userInfo.nickname}
            placeholder="8~30자리 영문"
            id="nickname"
            name="nickname"
          />
        </InputWrapper>
        <Seperator height={28} />
        <LabelledButtonSelect
          label="성별"
          buttonList={GENDER.map((v) => v.name)}
          multipleSelection={false}
          maxSelection={1}
          onChangeButton={(idx) => handleChangeInfo("gender", idx)}
          value={userInfo.gender}
        />
        <Seperator height={28} />
        <InputWrapper>
          <Label id="age">나이</Label>
          <TextInput
            inputMode="numeric"
            maxLength={4}
            type="text"
            onChange={(e) => handleChangeInfo("age", e.target.value)}
            value={userInfo.age}
            placeholder="출생년도"
            id="age"
            name="age"
            pattern="^[0-9]+$"
          />
        </InputWrapper>
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NextButton = styled(SquareButton)`
  width: 100%;
  padding: 13px 0;
`;
