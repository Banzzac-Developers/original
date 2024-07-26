import styled from "@emotion/styled";

type Props = {
  title: string | React.ReactElement;
  fill: boolean;
  backgroundColor: string;
  onClick: () => void;
  active?: boolean;
  className?: string;
};

export default function RoundButton({
  title,
  fill,
  backgroundColor,
  active = false,
  onClick,
  className,
}: Props) {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      active={active}
      isFill={fill}
      backgroundColor={backgroundColor}
    >
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  isFill: boolean;
  backgroundColor: string;
  active: boolean;
}>`
  min-width: 82px;
  width: inherit;
  display: flex;
  padding: 9px;
  height: 42px;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  line-height: 24px;
  border-radius: 22px;
  border: ${({ active }) => (active ? "2px solid" : "1px solid")};
  background-color: ${({ isFill, backgroundColor }) =>
    isFill ? backgroundColor : "#FFFFFF"};
  color: ${({ isFill, backgroundColor }) =>
    isFill ? "#FFFFFF" : backgroundColor};
`;
