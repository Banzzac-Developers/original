import styled from "@emotion/styled";

interface LabelProps {
  children: string;
  id: string;
  className?: string;
}

export default function Label({ id, className, children }: LabelProps) {
  return (
    <StyledLabel id={id} className={className}>
      {children}
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #212121;
  margin-bottom: 3px;
`;
