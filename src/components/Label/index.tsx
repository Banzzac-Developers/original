import styled from "@emotion/styled";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: string;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  lineHeight?: number;
}

export default function Label({
  children,
  fontSize = 16,
  color = "#212121",
  fontWeight = 700,
  lineHeight = 24,
  ...props
}: LabelProps) {
  return (
    <StyledLabel
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </StyledLabel>
  );
}

const StyledLabel = styled.label<{
  fontSize: number;
  color: string;
  fontWeight: number;
  lineHeight: number;
}>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;
