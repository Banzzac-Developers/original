import DividerDefault from "@/components/Divider/Divider";
import { FrinedsList } from "@/containers/Friends/FriendList";
import FriendSearch from "@/containers/Friends/FriendSearch";
import ProfileCard from "@/containers/Profile/ProfileCard";
import useModal from "@/hooks/common/useModal";
import useFriendList from "@/hooks/friends/useFriendList";
import useProfile from "@/hooks/profile/useProfile";
import SqueareHeader from "@/layouts/SquereHeader";
import { frinedListState } from "@/recoil/friends";
import { myPetProfileState, myProfileState } from "@/recoil/profile";
import { useRecoilValue } from "recoil";

export default function Friends() {
  //모달 설정
  const { addModal } = useModal();
  //Recoil 설정
  useFriendList();
  useProfile();
  //Recoil 값 호출
  const friendList = useRecoilValue(frinedListState);
  const myProfile = useRecoilValue(myProfileState);
  const petProfiles = useRecoilValue(myPetProfileState);
  //Modal 호출 함수
  function handleSearchFriend() {
    addModal({
      type: "fullscreen",
      props: {
        contents: <FriendSearch />,
        hasCloseButton: false,
      },
    });
  }

  return (
    <>
      <SqueareHeader
        title="친구"
        headerIcons={[
          {
            icon: "search",
            onClick: handleSearchFriend,
          },
          {
            icon: "friendAdd",
            onClick: () => {},
          },
          {
            icon: "setting",
            onClick: () => {},
          },
        ]}
      />
      {myProfile && petProfiles && (
        <ProfileCard
          introduction={myProfile.introduction}
          nick_name={myProfile.nick_name}
          profile_img={myProfile.profile_img.url}
          pet_nick_name={petProfiles[0].pet_nick_name}
          pet_profile_img={petProfiles[0].pet_profile_img.url}
        />
      )}

      <DividerDefault width="100%" />
      <FrinedsList friendList={friendList} nothingMsg={nothingFriendMsg} />
    </>
  );
}

//친구가 없을 경우 보여줄 메세지
const nothingFriendMsg =
  "친구가 없습니다. 친구를 추가하여 즐거운 반짝을 산책하세요.";
