import DividerDefault from "@/components/Divider/Divider";
import { FrinedsList } from "@/containers/Friends/FriendList";
import ProfileCard from "@/containers/Profile/ProfileCard";
import useFriendList from "@/hooks/friends/useFriendList";
import useProfile from "@/hooks/profile/useProfile";
import SqueareHeader from "@/layouts/SquereHeader";
import { frinedListState } from "@/recoil/friends";
import { myPetProfileState, myProfileState } from "@/recoil/profile";
import { useRecoilValue } from "recoil";

/**해야 할 것
 * 1. 마이 프로필을 만들 것
 */

export default function Friends() {
  useFriendList();
  useProfile();
  const friendList = useRecoilValue(frinedListState);
  const myProfile = useRecoilValue(myProfileState);
  const petProfiles = useRecoilValue(myPetProfileState);

  return (
    <>
      <SqueareHeader
        title="친구"
        headerIcons={[
          {
            icon: "search",
            onClick: () => {},
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
      <FrinedsList friendList={friendList} />
    </>
  );
}
