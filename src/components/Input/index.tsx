import styled from "@emotion/styled";

type Props = {
  title: string;
  placeholder: string;
  id: string;
  value: string | number | readonly string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputDefault({
  title,
  id,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <Container>
      <Label htmlFor={id}>{title}</Label>
      <Input
        value={value}
        onChange={onChange}
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #212121;
  line-height: 22px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #212121;
  margin-bottom: 3px;
`;

const Input = styled.input`
  border: none;
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
