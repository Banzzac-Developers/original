import {
  DoubleProfileImage,
  SingleProfileImage,
} from "@/components/ProfileImage/ProfileImage";
import styled from "@emotion/styled";
import { ReactNode } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProfileImage = { SingleProfileImage, DoubleProfileImage };

type Props = {
  children: ReactNode;
};

export default function ProfileImageContainer({ children }: Props) {
  return <ProfileImg>{children}</ProfileImg>;
}

const ProfileImg = styled.div<{ width?: string }>`
  width: ${({ width }) => width || "96px"};
`;
