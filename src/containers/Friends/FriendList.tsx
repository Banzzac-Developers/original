/*  해야 할 것
    1. 친구가 없을 경우 친구를 추가해보세요를 친구 서브 타이틀은 존재하되 그 밑에 이쁘게 나오도록 만들 것 
   */

import Text from "@/components/Text";
import { UserInfoList } from "@/models/friends";
import { FontStyle } from "@/utils/StyleUtil";
import styled from "@emotion/styled";
import FriendCard from "./FriendCard";
import SvgSelector from "@/components/Svg/SvgSelector";
import { useState } from "react";
import { css, keyframes } from "@emotion/react";

type NothingProps = {
  msg?: string;
};
type Props = {
  friendList?: UserInfoList[];
  nothingMsg: string;
  searchable?: boolean;
  searchWord?: string;
};

export const FrinedsList = ({
  friendList,
  nothingMsg,
  searchable = false,
  searchWord = "",
}: Props) => {
  //친구 목록 여닫기 State
  const [openFriendList, setOpenFriendList] = useState(true);

  //친구 목록 여닫기 Click Event
  function openListHandler() {
    setOpenFriendList((prev) => !prev);
  }

  return (
    <Container>
      <SubTitle isOpen={openFriendList} onClick={openListHandler}>
        <StyledText {...FontStyle(14, 700, 20, "#9e9e9e")}>
          {`친구 ${friendList?.length}`}
        </StyledText>
        <button>
          <SvgSelector
            height={14}
            width={14}
            stroke="#9e9e9e"
            svg="tailLessArrowRight"
          />
        </button>
      </SubTitle>
      {/* 정상적으로 친구 목록을 불러올 경우*/}
      {friendList !== undefined &&
        openFriendList &&
        friendList.length !== 0 && (
          <Wrapper searchable={searchable}>
            {friendList.map((friend, idx) => (
              <li key={idx}>
                <FriendCard
                  {...friend}
                  searchable={searchable}
                  searchWord={searchWord}
                />
              </li>
            ))}
          </Wrapper>
        )}
      {/* 친구가 없을 경우 */}
      {friendList?.length === 0 && <NothingFriend msg={nothingMsg} />}
      {/* 친구 목록을 불러오지 못할 경우 */}
      {!friendList && <CanNotCallFriendList />}
    </Container>
  );
};
//🌻🌻🌻 Components 🌻🌻🌻
export function NothingFriend({ msg }: NothingProps) {
  //친구가 없을 경우
  return <div>{msg}</div>;
}

function CanNotCallFriendList() {
  //친구 목록을 불러오지 못했을 경우
  return (
    <div>
      친구 목록을 불러올 수 없습니다. 네트워크 상태를 확인하고 반복될 경우
      고객센터에 문의하세요.
    </div>
  );
}

//🔻🔻🔻Stlyed Components🔻🔻🔻
const Container = styled.ul``;

/* 소제목 DIV 태그 ex) 친구 10명          SVG */
const SubTitle = styled.div<{ isOpen: boolean }>`
  padding: 0 20px 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    animation: ${({ isOpen }) =>
      isOpen
        ? css`
            ${svgRightAnimation} 0.2s ease-in forwards
          `
        : css`
            ${svgDownAnimation} 0.2s ease-in forwards
          `};
  }
`;

/** 소제목 텍스트 ex) 친구*/
const StyledText = styled(Text)`
  padding: 8px 0;
`;

const Wrapper = styled.ul<{ searchable: boolean }>`
  li {
    /* 네비게이터 Bar가 마지막 Index를 가릴 경우를 생각해서 Last-Child Padding 줌
    네비게이터가 없을 경우 searchable = true 임.*/
    &:last-child {
      padding-bottom: ${({ searchable }) => (searchable ? "0px" : "100px")};
    }
  }
`;

/** 💫 SVG 애니메이션 💨💨💨💨 */
const svgDownAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(90deg); 
  }
`;
const svgRightAnimation = keyframes`
 0%{
    transform: rotate(90deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;
