import styled from "@emotion/styled";

type Props = {
  nick_name: string;
  pet_name: string;
};
export default function NameTag({ nick_name, pet_name }: Props) {
  return (
    <Container>
      {nick_name}{" "}
      {pet_name === "" || pet_name === undefined ? "" : `| ${pet_name}`}
    </Container>
  );
}

const Container = styled.h4`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  strong {
    font-size: 18px;
  }
`;
