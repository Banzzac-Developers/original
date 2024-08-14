import SvgSelector from "@/components/Svg/SvgSelector";
import styled from "@emotion/styled";

export default function BlockFriendList() {
  return (
    <Header>
      <CancleBtn>
        <SvgSelector
          height={20}
          stroke="#212121"
          width={20}
          svg="close"
        ></SvgSelector>
      </CancleBtn>
      차단친구
    </Header>
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
