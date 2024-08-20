import styled from "@emotion/styled";

type Props = {
  msg: string;
};

export default function StatusMessage({ msg }: Props) {
  return <StatusMsg>{msg}</StatusMsg>;
}

const StatusMsg = styled.p`
  font-size: 12px;
  color: #757575;
  line-height: 20px;
`;
