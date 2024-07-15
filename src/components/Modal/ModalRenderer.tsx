import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";

import { modalState } from "@recoil/index";
import useModal from "@hooks/common/useModal";
import FullScreenModal from "./FullScreenModal";
// import TailModal from "./TailModal";
import Popup from "./Popup";
import { isFullScreen, isPopup } from "@models/common";
import { useEffect } from "react";

export default function ModalRenderer() {
  const modals = useRecoilValue(modalState);
  const { removeCurrentModal, clearModal } = useModal();

  useEffect(() => {
    window.addEventListener("popstate", clearModal);

    return () => {
      window.removeEventListener("popstate", clearModal);
    };
  }, []);

  return (
    <Container>
      <Background onClick={removeCurrentModal} />
      {modals.map((modal) => {
        if (isPopup(modal)) {
          const { props, type } = modal;
          return (
            <Popup
              key={type}
              buttonProps={props.buttonProps}
              contents={props.contents}
            />
          );
        }
        if (isFullScreen(modal))
          return (
            <FullScreenModal
              hasCloseButton={modal.props.hasCloseButton}
              key={modal.type}
              contents={modal.props.contents}
            />
          );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;
