import { CSSObject } from "@emotion/react";
import ButtonSelect from "../ButtonSelect";
import TextInput from "../TextInput";
import Seperator from "@/components/Seperator";
import styled from "@emotion/styled";

interface Props {
  buttonList: string[];
  label: string;
  maxSelection: number;
  value: string | number;
  onChange: (v: number | string) => void;
  gridStyle?: CSSObject;
  placeholder: string;
}

export default function SelectWithCustomInput({
  buttonList,
  label,
  gridStyle,
  onChange,
  value,
  maxSelection,
  placeholder,
}: Props) {
  const isNumber = (value: number | string): number => {
    if (typeof value === "number") {
      return value;
    } else {
      return -1;
    }
  };

  const isString = (value: number | string): string => {
    if (typeof value === "string") {
      return value;
    } else {
      return "";
    }
  };

  const handleFocus = () => {
    if (typeof value === "number") {
      onChange(-1);
    }
  };

  return (
    <Container>
      <ButtonSelect
        onChangeButton={(idx) => onChange(idx as number)}
        value={isNumber(value)}
        gridStyle={gridStyle}
        maxSelection={maxSelection}
        multipleSelection={false}
        buttonList={buttonList}
        label={label}
      />
      <Seperator height={10} />
      <StyledInput
        placeholder={placeholder}
        type="text"
        value={isString(value)}
        onFocus={handleFocus}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(TextInput.Input)`
  font-size: 16px;
  padding: 3px;
`;
