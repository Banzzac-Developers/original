import DividerDefault from "@/components/Divider/Divider";
import SqueareHeader from "@/layouts/SquereHeader";
import styled from "@emotion/styled";

/*  1. 채팅 기록이 없을 떄 보여줄 내용
    2. Chatting List Card Compound 만들기.
    3. Chat Card Slide 기능 구현 -> 나가기, 차단하기
    4. Chatting Page에 적용
    */

export default function Chattings() {
  return (
    <>
      <SqueareHeader
        title="채팅"
        headerIcons={[
          {
            icon: "search",
            onClick: () => {},
          },
          {
            icon: "setting",
            onClick: () => {},
          },
        ]}
      />
      <DividerDefault width="100%" />
      <Main></Main>
    </>
  );
}

const Main = styled.main``;
