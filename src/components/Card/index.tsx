import styled from "@emotion/styled";
import { ReactNode } from "react";
import ProfileImageContainer, { ProfileImage } from "./ProfileImage";
import InfomationsContainer, { Infomation } from "./Infomations";
import RoundButton from "../Button/RoundButton";

type Props = {
  children: ReactNode;
  justifyContent?: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const Card = {
  Infomation,
  ProfileImage,
  InfomationsContainer,
  ProfileImageContainer,
  RoundButton,
};

export default function CardContainer({ children, justifyContent }: Props) {
  return <Container justifyContent={justifyContent}>{children}</Container>;
}

const Container = styled.div<{ justifyContent?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  width: 100vw;
  flex-shrink: 0;
  padding: 8px 20px 8px 24px;
`;
