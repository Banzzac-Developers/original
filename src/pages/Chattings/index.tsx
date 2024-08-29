import DividerDefault from "@/components/Divider/Divider";
import SqueareHeader from "@/layouts/SquereHeader";
import styled from "@emotion/styled";

export default function Chattings() {
  return (
    <>
      <SqueareHeader
        title="채팅"
        headerIcons={[
          {
            icon: "search",
            onClick: () => {},
          },
          {
            icon: "setting",
            onClick: () => {},
          },
        ]}
      />
      <DividerDefault width="100%" />
      <Main></Main>
    </>
  );
}

const Main = styled.main``;
