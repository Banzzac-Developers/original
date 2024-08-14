import { useContext } from "react";
import { SelectedIdxContext } from "./context";
import styled from "@emotion/styled";

interface Props {
  imagesLength: number;
}

export default function Indicator({ imagesLength }: Props) {
  const { selectedIdx, setSelectedIdx } = useContext(SelectedIdxContext);

  return (
    <Container>
      {Array.from({ length: imagesLength }).map((_, idx) => (
        <li key={idx}>
          <Button
            onClick={() => setSelectedIdx(idx)}
            isActive={selectedIdx === idx}
          />
        </li>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const Button = styled.button<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #212121;
  background-color: ${({ isActive }) => (isActive ? "#212121" : "#fff")};
`;
