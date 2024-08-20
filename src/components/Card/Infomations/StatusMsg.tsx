import styled from "@emotion/styled";
import { ReactNode } from "react";

type Props = {
  msg: ReactNode;
};

export default function StatusMessage({ msg }: Props) {
  return <StatusMsg>{msg}</StatusMsg>;
}

const StatusMsg = styled.p`
  font-size: 12px;
  color: #757575;
  line-height: 20px;
`;
