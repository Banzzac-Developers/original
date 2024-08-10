import MenuPopup from "@/components/Modal/MenuPopup";
import MenuPopupItems from "@/components/Modal/MenuPopupItems";
import useModal from "@/hooks/common/useModal";

export default function FriendSettingMenu() {
  const { addModal } = useModal();

  function handleBlockFriendScreen() {
    addModal({
      type: "fullscreen",
      props: {
        contents: <div>차단한 친구 목록 아직 컴포넌트 안만듬</div>,
      },
    });
  }
  return (
    <MenuPopup
      pos={{ right: 16, top: 40 }}
      menuList={[
        {
          menu: <MenuPopupItems svg="sort" title="리스트 편집" />,
          handleClick: () => {
            console.log("리스트 편집 미구현");
          },
        },
        {
          menu: <MenuPopupItems svg="userRemove" title="삭제한 친구" />,
          handleClick: () => {
            console.log("API가 없어 구현 불가");
          },
        },
        {
          menu: <MenuPopupItems svg="userClose" title="차단 친구" />,
          handleClick: handleBlockFriendScreen,
        },
      ]}
    ></MenuPopup>
  );
}
