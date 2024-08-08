import { DoubleProfileImage } from "@/components/ProfileImage/ProfileImage";
import { UserInfoList } from "@/models/friends";
import styled from "@emotion/styled";
import { isTherePetImage, isThereUserImage } from "@/utils/ImageInit";
import { useEffect, useRef, useState } from "react";
import useAddBlockFriend from "@/hooks/friends/useBlockFriend";

type Props = UserInfoList & {
  searchable?: boolean;
  searchWord?: string;
};

export default function FriendCard({
  nick_name,
  pet_img_url,
  pet_name,
  profile_img_url,
  user_id,
  searchWord = "",
  searchable = false,
}: Props) {
  // 이미지 없을 경우 기본 이미지로 초기화
  const userImg = isThereUserImage(profile_img_url);
  const petImg = isTherePetImage(pet_img_url);

  //현재 height 값 알아오기 -> 기기의 크기가 바뀌어도 정사각형 버튼이 만들어지기 위해 가져옴
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current?.offsetHeight);
    }
  }, []);

  //차단 및 삭제 버튼,
  const { addBlockFriend } = useAddBlockFriend(user_id);
  //Swiper 관련
  const [isSwiped, setIsSwiped] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    //터치가 시작된 지점
    startX.current = e.touches[0].clientX;
    currentX.current = startX.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    //현재 터치 지점
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    //Height * 2보다 많이 움직이고 손가락을 땠을 경우
    if (startX.current - currentX.current > height * 2) {
      setIsSwiped(true);
      //아닐 경우
    } else if (currentX.current - startX.current > height * 2) {
      setIsSwiped(false);
    }
  };

  return (
    <Wrapper>
      <Container
        ref={containerRef}
        isSwiped={isSwiped}
        height={height}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ProfileImg>
          <DoubleProfileImage
            key={user_id}
            border={3}
            size={48}
            borderColor="#fff"
            left={40}
            img={userImg}
            img2={petImg}
          />
        </ProfileImg>
        <Infomations>
          {/* 검색이 가능할 경우 */}
          {searchable && (
            <Namse>
              {searchTextBold(nick_name, searchWord)}{" "}
              {pet_name === "" || pet_name === undefined ? (
                ""
              ) : (
                <>
                  {"| "} {searchTextBold(pet_name, searchWord)}{" "}
                </>
              )}
            </Namse>
          )}
          {/* 검색이 불가능할 경우 */}
          {!searchable && (
            <Namse>
              {nick_name}{" "}
              {pet_name === "" || pet_name === undefined ? "" : `| ${pet_name}`}
            </Namse>
          )}
          <StatusMsg>상태 메세지</StatusMsg>
        </Infomations>
      </Container>
      <Actions isSwiped={isSwiped} height={height}>
        <button
          onClick={() => {
            console.log(user_id + "삭제");
          }}
        >
          삭제
        </button>
        <button onClick={addBlockFriend}>차단</button>
      </Actions>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Container = styled.div<{ isSwiped: boolean; height: number }>`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  padding: 8px 20px 8px 24px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isSwiped, height }) =>
    isSwiped ? `translateX(-${height * 2}px)` : "translateX(0)"};
  z-index: 2;
`;

export const ProfileImg = styled.div<{ width?: string }>`
  width: ${({ width }) => width || "96px"};
`;

export const Infomations = styled.div``;

export const Namse = styled.h4`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 550;
  line-height: 22px;
  strong {
    font-size: 18px;
  }
`;

export const StatusMsg = styled.p`
  font-size: 12px;
  color: #757575;
  line-height: 20px;
`;

const Actions = styled.div<{ isSwiped: boolean; height: number }>`
  display: flex;
  position: absolute;
  right: ${({ height }) =>
    -height * 2 + "px"}; //기본위치 -Height * 2 => 우측에 존재하게 됨
  top: 0;
  width: ${({ height }) => height * 2 + "px"};
  height: 100%;
  z-index: 1;
  transform: ${({ isSwiped, height }) =>
    isSwiped ? `translateX(${-height * 2}px)` : `translateX(0)`};
  transition: transform 0.3s ease-in-out;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #d9d9d9;
    color: #212121;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 500;
    &:last-child {
      background-color: #e72b23;
      color: #fff;
    }
  }
`;

// 검색 문자와 같은 문자열일 경우 Bold 처리 함수
function searchTextBold(name: string, word: string) {
  if (word !== "") {
    const splits = name.split(new RegExp(`(${word})`, "gi"));
    return splits.map((sameWord, idx) =>
      sameWord.toLowerCase() === word.toLowerCase() ? (
        <strong key={idx}>{sameWord}</strong>
      ) : (
        sameWord
      ),
    );
  } else {
    return <>{name}</>;
  }
}
