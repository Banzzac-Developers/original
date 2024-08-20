import styled from "@emotion/styled";
import { ReactNode } from "react";
import NameTag from "./NameTag";
import StatusMessage from "./StatusMsg";

// eslint-disable-next-line react-refresh/only-export-components
export const Infomation = { NameTag, StatusMessage };

type Props = {
  children: ReactNode;
};

export default function InfomationsContainer({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.div``;
