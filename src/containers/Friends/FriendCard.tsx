import { DoubleProfileImage } from "@/components/ProfileImage/ProfileImage";
import { UserInfoList } from "@/models/friends";
import styled from "@emotion/styled";
import { isTherePetImage, isThereUserImage } from "@/utils/ImageInit";
import useAddBlockFriend from "@/hooks/friends/useBlockFriend";
import {
  animate,
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import useRemoveFriend from "@/hooks/friends/useRemoveFriend";

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

  //차단 및 삭제 버튼,
  const { addBlockFriend } = useAddBlockFriend(user_id);
  const { removeFriend } = useRemoveFriend(user_id);
  // framer-motion 적용
  const x = useMotionValue(0);
  const buttonWidth = useTransform(x, [-150, 0], [75, 0]);
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > 0) {
      animate(x, 0);
    } else {
      animate(x, -150);
    }
  };

  return (
    <Wrapper>
      <Container
        layout
        initial={false}
        dragConstraints={{ left: -150, right: 0 }}
        dragElastic={0}
        drag="x"
        style={{ x }}
        whileDrag={{ cursor: "grabbing" }}
        transition={{ duration: 0 }}
        onDragEnd={handleDragEnd}
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
      <Actions>
        <ActionButton
          layout
          initial={{ width: 0 }}
          style={{ x, width: buttonWidth }}
          onClick={removeFriend}
        >
          삭제
        </ActionButton>
        <ActionButton
          layout
          initial={{ width: 0 }}
          style={{ x, width: buttonWidth }}
          onClick={addBlockFriend}
        >
          차단
        </ActionButton>
      </Actions>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 66px;
`;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100vw;
  flex-shrink: 0;
  padding: 8px 20px 8px 24px;
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

const Actions = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid red;
`;

const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #d9d9d9;
  color: #212121;
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  &:last-child {
    background-color: #e72b23;
    color: #fff;
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
