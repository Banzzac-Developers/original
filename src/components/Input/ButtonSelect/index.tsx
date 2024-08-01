import RoundButton from "@/components/Button/RoundButton";
import styled, { CSSObject } from "@emotion/styled";

export type ButtonSelectProps = {
  buttonList: string[];
  multipleSelection: boolean;
  maxSelection: number;
  value: number[] | number;
  gridStyle?: CSSObject;
  className?: string;
  onChangeButton: (idxArr: number[] | number) => void;
};

export default function ButtonSelect({
  className,
  buttonList,
  gridStyle = { gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" },
  multipleSelection,
  maxSelection,
  value,
  onChangeButton,
}: ButtonSelectProps) {
  const handleClick = (idx: number) => {
    // 중복 선택 불가능
    if (!multipleSelection && typeof value === "number") {
      if (value === idx) {
        onChangeButton(-1);
      } else {
        onChangeButton(idx);
      }
    }
    // 중복 선택 가능
    else if (Array.isArray(value)) {
      if (!value.includes(idx) && value.length >= maxSelection) return;
      if (value.includes(idx)) {
        const newArr = value.filter((v) => v !== idx && v >= 0);
        onChangeButton(newArr);
      } else {
        const newArr = value.concat(idx).filter((v) => v >= 0);
        onChangeButton(newArr);
      }
    }
  };

  const isActive = (idx: number) => {
    if (Array.isArray(value)) {
      return value.includes(idx);
    } else {
      return value === idx;
    }
  };

  return (
    <Container gridStyle={gridStyle} className={className}>
      {buttonList.map((button, idx) => (
        <li key={button}>
          <RoundButton
            active={isActive(idx)}
            onClick={() => handleClick(idx)}
            title={button}
            fill={false}
            backgroundColor={isActive(idx) ? "#212121" : "#757575"}
          />
        </li>
      ))}
    </Container>
  );
}

const Container = styled.ul<{ gridStyle: CSSObject }>`
  display: grid;
  ${({ gridStyle }) => gridStyle};
  li {
    width: 100%;
  }
`;
