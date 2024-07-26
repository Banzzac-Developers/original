import styled from "@emotion/styled";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type: "text" | "email" | "tel" | "search";
}

export default function Input(props: InputProps) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  color: #212121;
  line-height: 22px;
  border-bottom: 1px solid #757575;
  line-height: 22px;
  font-size: 14px;
  color: #212121;
  &:focus {
    border-color: #212121;
  }
  &::placeholder {
    color: #757575;
  }
`;
