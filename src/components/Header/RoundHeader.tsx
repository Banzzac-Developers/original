import styled from "@emotion/styled";
import SvgSelector from "../Svg/SvgSelector";

interface Props {
  description: string;
  icon: "dogFace" | "face";
}

export default function RoundHeader({ description, icon }: Props) {
  return (
    <Header>
      <SvgSelector svg={icon} width={36} height={36} stroke="#000000" />
      <Description>{description}</Description>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #212121;
  border-radius: 0 0 16px 16px;
  padding-top: 30px;
  padding-bottom: 20px;
  box-shadow: 0px 4px 4px 0px #00000026;
`;

const Description = styled.div`
  font-weight: 700;
  color: #000000;
  size: 18px;
  line-height: 24px;
`;
