import { SvgIcon } from "@/models";
import styled from "@emotion/styled";
import SvgSelector from "../Svg/SvgSelector";

type Props = {
  title: string;
  svg: SvgIcon;
  width?: number;
  height?: number;
};

export default function MenuPopupItems({
  title,
  svg,
  height = 24,
  width = 24,
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SvgSelector height={height} width={width} stroke="#212121" svg={svg} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h5`
  font-size: 16px;
  font-weight: 500;
`;
