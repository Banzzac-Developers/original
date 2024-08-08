import SvgSelector from "@/components/Svg/SvgSelector";
import useModal from "@/hooks/common/useModal";
import { frinedListState } from "@/recoil/friends";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { useRecoilValue } from "recoil";
import { FrinedsList } from "./FriendList";
import { UserInfoList } from "@/models/friends";
import RoundInput from "@/components/Input/SearchBar";

//친구가 없을 때 보여줄 메세지
const nothingFriendMsg = "검색된 친구가 없습니다.";

export default function FriendSearch() {
  const { removeCurrentModal } = useModal();
  const friendList = useRecoilValue(frinedListState);
  const [searched, setSearched] = useState<UserInfoList[]>(friendList);
  const [searchWord, setSearchWord] = useState("");
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target.value;
    setSearchWord(target);

    if (target.length === 0) {
      setSearched(friendList);
    } else {
      setSearched(
        friendList.filter((user) => {
          if (
            user.nick_name.includes(target) ||
            user.pet_name.includes(target)
          ) {
            return user;
          }
        }),
      );
    }
  }

  return (
    <Container>
      <Header>
        <SvgSelector height={18} width={18} stroke="#212121" svg="search" />
        <RoundInput
          type="text"
          width="80%"
          height={36}
          placeholder="검색"
          onChange={handleInput}
        />
        <ModalCancleButton onClick={removeCurrentModal}>취소</ModalCancleButton>
      </Header>
      <FrinedsList
        friendList={searched}
        nothingMsg={nothingFriendMsg}
        searchable={true}
        searchWord={searchWord}
      />
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.header`
  padding: 8px 20px 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalCancleButton = styled.button``;
