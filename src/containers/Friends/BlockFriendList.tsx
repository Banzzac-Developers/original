import CardContainer, { Card } from "@/components/Card";
import DividerDefault from "@/components/Divider/Divider";
import SvgSelector from "@/components/Svg/SvgSelector";
import useModal from "@/hooks/common/useModal";
import styled from "@emotion/styled";

export default function BlockFriendList() {
  const { removeCurrentModal } = useModal();
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
        <CardContainer justifyContent="space-between">
          <Section>
            <Card.ProfileImageContainer>
              <Card.ProfileImage.DoubleProfileImage
                key={"user_id"}
                border={3}
                size={48}
                borderColor="#fff"
                left={40}
                img={""}
                img2={""}
              />
            </Card.ProfileImageContainer>
            <Card.InfomationsContainer>
              <Card.Infomation.NameTag
                nick_name="보호자 닉네임"
                pet_name="강아지 이름"
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
                console.log("클릭함");
              }}
            />
          </Section>
        </CardContainer>
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
