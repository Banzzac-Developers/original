import styled from "@emotion/styled";
import { Namse, ProfileImg, StatusMsg } from "../Friends/FriendCard";
import { DoubleProfileImage } from "@/components/ProfileImage/ProfileImage";
import { isTherePetImage, isThereUserImage } from "@/utils/ImageInit";
import SvgSelector from "@/components/Svg/SvgSelector";

type Props = {
  nick_name: string;
  profile_img?: string;
  introduction?: string;
  pet_nick_name?: string;
  pet_profile_img?: string;
};

export default function ProfileCard({
  nick_name,
  profile_img,
  introduction,
  pet_nick_name,
  pet_profile_img,
}: Props) {
  const userImg = isThereUserImage(profile_img);
  const petImg = isTherePetImage(pet_profile_img);

  return (
    <Container>
      <ProfileImg width={`${70 * 2}px`}>
        <DoubleProfileImage
          border={3}
          size={56}
          borderColor="#fff"
          left={40}
          img={userImg}
          img2={petImg}
        />
      </ProfileImg>
      <Infomations>
        <Between>
          <Namse>
            {`${nick_name} `}
            {pet_nick_name === "" || pet_nick_name === undefined
              ? ""
              : `| ${pet_nick_name}`}
          </Namse>
          <StatusMsg>
            {introduction === "" || introduction === undefined
              ? ""
              : introduction}
          </StatusMsg>
        </Between>
        <Between>
          <button
            onClick={() => {
              console.log("프로필로 이동 함수 적용할 곳");
            }}
          >
            <SvgSelector
              height={25}
              width={25}
              stroke="#212121"
              svg="addComment"
            />
          </button>
        </Between>
      </Infomations>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 20px 10px 24px;
  display: flex;
  align-items: center;
`;

const Infomations = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Between = styled.div``;
