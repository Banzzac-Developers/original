import styled from "@emotion/styled";
import { ReactElement } from "react";

type Props = {
  title: string | ReactElement;
  fill: boolean;
  backgroundColor: string;
  onClick: () => void;
  active?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function SquareButton({
  title,
  fill,
  backgroundColor,
  active = false,
  onClick,
  className,
  type = "button",
}: Props) {
  return (
    <StyledButton
      role="button"
      type={type}
      className={className}
      active={active}
      isFill={fill}
      backgroundColor={backgroundColor}
      onClick={onClick}
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
  padding: 8px 10px;
  min-width: 82px;
  width: inherit;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: ${({ active }) => (active ? "2px solid" : "1px solid")};
  background-color: ${({ isFill, backgroundColor }) =>
    isFill ? backgroundColor : "#FFFFFF"};
  color: ${({ isFill, backgroundColor }) =>
    isFill ? "#FFFFFF" : backgroundColor};
`;
