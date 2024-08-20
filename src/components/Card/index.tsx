import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Infomation } from "./Infomations";
import {
  DoubleProfileImage,
  SingleProfileImage,
} from "../ProfileImage/ProfileImage";

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export const Card = { Infomation, DoubleProfileImage, SingleProfileImage };

export default function CardContainer({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  flex-shrink: 0;
  padding: 8px 20px 8px 24px;
`;
