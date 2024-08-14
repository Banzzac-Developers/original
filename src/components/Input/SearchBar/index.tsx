import styled from "@emotion/styled";
import { ChangeEvent } from "react";

type Props = {
  width: string;
  height: number;
  type: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function RoundInput({
  type,
  width,
  height,
  onChange,
  placeholder,
}: Props) {
  return (
    <Input
      type={type}
      width={width}
      height={height}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

const Input = styled.input<{ width: string; height: number }>`
  border: 1px solid #212121;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width};
  border-radius: ${({ height }) => height + "px"};
  padding: ${({ height }) => height / 2 + "px"};
  &::placeholder {
    color: #9e9e9e;
    font-weight: 700;
    font-size: 0.85rem;
  }
`;
