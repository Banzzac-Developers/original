import { DoubleProfileImage } from "@/components/ProfileImage/ProfileImage";
import { UserInfoList } from "@/models/friends";
import styled from "@emotion/styled";
import { isTherePetImage, isThereUserImage } from "@/utils/ImageInit";

export default function FriendCard({
  nick_name,
  pet_img_url,
  pet_name,
  profile_img_url,
  user_id,
}: UserInfoList) {
  // 이미지 없을 경우 기본 이미지로 초기화
  const userImg = isThereUserImage(profile_img_url);
  const petImg = isTherePetImage(pet_img_url);

  return (
    <Container>
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
        <Namse>
          {nick_name}{" "}
          {pet_name === "" || pet_name === undefined ? "" : `| ${pet_name}`}
        </Namse>
        <StatusMsg>상태 메세지</StatusMsg>
      </Infomations>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileImg = styled.div<{ width?: string }>`
  width: ${({ width }) => width || "96px"};
`;

export const Infomations = styled.div``;

export const Namse = styled.h4`
  font-size: 14px;
  font-weight: 550;
  line-height: 22px;
`;

export const StatusMsg = styled.p`
  font-size: 12px;
  color: #757575;
  line-height: 20px;
`;
