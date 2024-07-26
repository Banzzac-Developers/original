import SvgSelector from "@/components/Svg/SvgSelector";
import { HeaderIcon } from "@/models";
import styled from "@emotion/styled";

const IconButton = ({
  icon,
  onClick,
}: {
  icon: HeaderIcon;
  onClick: () => void;
}) => {
  switch (icon) {
    case "search":
      return (
        <button onClick={onClick}>
          <SvgSelector width={24} height={24} stroke="#212121" svg={"search"} />
        </button>
      );
    case "friendAdd":
      return (
        <button onClick={onClick}>
          <SvgSelector
            width={24}
            height={24}
            stroke="#212121"
            svg={"userAdd"}
          />
        </button>
      );
    case "setting":
      return (
        <button onClick={onClick}>
          <SvgSelector
            width={24}
            height={24}
            stroke="#212121"
            svg={"setting"}
          />
        </button>
      );
    default:
      return <div />;
  }
};

const Title = ({ title }: { title: string }) => {
  return <TitleContent>{title}</TitleContent>;
};

const Header = { IconButton, Title };

export default Header;

const TitleContent = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`