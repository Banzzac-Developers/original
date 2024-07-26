/*  해야 할 것
    1. 친구가 없을 경우 친구를 추가해보세요를 친구 서브 타이틀은 존재하되 그 밑에 이쁘게 나오도록 만들 것 
   */

import Text from "@/components/Text";
import { UserInfoList } from "@/models/friends";
import { FontStyle } from "@/utils/StyleUtil";
import styled from "@emotion/styled";
import FriendCard from "./FriendCard";

type Props = {
  friendList?: UserInfoList[];
};

export const FrinedsList = ({ friendList }: Props) => {
  if (friendList === undefined) return <h4>친구를 추가해보세요</h4>;

  return (
    <Container>
      <StyledText {...FontStyle(14, 700, 20, "#9e9e9e")}>
        {`친구 ${friendList.length}`}
      </StyledText>
      <Wrapper>
        {friendList.map((friend, idx) => (
          <li key={idx}>
            <FriendCard {...friend} />
          </li>
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.ul`
  padding: 0 20px 0 24px;
`;

const StyledText = styled(Text)`
  padding: 8px 0;
`;

const Wrapper = styled.ul`
  li {
    padding: 8px 0;
    /* 네비게이터 Bar가 마지막 Index를 가릴 경우를 생각해서 Last-Child Padding 줌 */
    &:last-child {
      padding-bottom: 100px;
    }
  }
`;
