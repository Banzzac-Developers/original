import styled from "@emotion/styled";

type Props = {
  color?: string;
  width: string;
  className?: string;
};

export default function DividerDefault({
  color = "#e0e0e0",
  width,
  className,
}: Props) {
  return <Divider className={className} width={width} color={color} />;
}

const Divider = styled.div<{ color: string; width: string }>`
  border-top: ${({ color }) => `1px solid ${color}`};
  width: ${({ width }) => width};
`;
