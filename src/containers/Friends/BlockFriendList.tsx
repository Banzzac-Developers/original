import CardContainer, { Card } from "@/components/Card";
import DividerDefault from "@/components/Divider/Divider";
import SvgSelector from "@/components/Svg/SvgSelector";
import useModal from "@/hooks/common/useModal";
import useBlockFriendList from "@/hooks/friends/useBlockFriendList";
import styled from "@emotion/styled";
import { NothingFriend } from "./FriendList";

export default function BlockFriendList() {
  const { removeCurrentModal } = useModal();
  const { blockFriendList: blockList, setBlockFriendList } =
    useBlockFriendList();
  return (
    <>
      <Header>
        <CancleBtn onClick={removeCurrentModal}>
          <SvgSelector
            height={20}
            stroke="#212121"
            width={20}
            svg="close"
          ></SvgSelector>
        </CancleBtn>
        차단친구
      </Header>
      <DividerDefault width="100%" />
      <Main>
        {/*🟢🟢🟢Block Friend List가 있을 경우🟢🟢🟢*/}
        {blockList &&
          blockList.map((blockFriend, idx) => {
            return (
              <CardContainer justifyContent="space-between">
                <Section>
                  <Card.ProfileImageContainer>
                    <Card.ProfileImage.DoubleProfileImage
                      key={"user_id"}
                      border={3}
                      size={48}
                      borderColor="#fff"
                      left={40}
                      img={blockFriend.profile_img_url}
                      img2={blockFriend.pet_img_url}
                    />
                  </Card.ProfileImageContainer>
                  <Card.InfomationsContainer>
                    <Card.Infomation.NameTag
                      nick_name={blockFriend.nick_name}
                      pet_name={blockFriend.pet_name}
                    />
                  </Card.InfomationsContainer>
                </Section>
                <Section>
                  <Card.RoundButton
                    title={"차단해제"}
                    fill={false}
                    backgroundColor="black"
                    active={true}
                    onClick={() => {
                      console.log(blockFriend.user_id + " 클릭함");
                    }}
                  />
                </Section>
              </CardContainer>
            );
          })}
        {/*🔴🔴🔴 차단한 친구가 없을 경우 🔴🔴🔴*/}
        {blockList?.length == 0 && (
          <NothingFriend msg="차단한 친구가 없습니다." />
        )}
      </Main>
    </>
  );
}

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  padding: 10px 0px;
`;
const CancleBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 16px;
`;

const Main = styled.main``;

const Section = styled.section`
  display: flex;
  align-items: center;
  button {
    height: 24px;
    padding: 13px 0px;
    font-size: 14px;
  }
`;
