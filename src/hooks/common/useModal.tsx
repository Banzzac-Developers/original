import { Modal } from "@/models";
import { modalState } from "@/recoil";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { useBodyScrollLock } from "./useBodyScrollLock";

export default function useModal() {
  const setModal = useSetRecoilState(modalState);
  const { lockScroll, openScroll } = useBodyScrollLock();

  const addModal = useCallback(
    (modalType: Modal) => {
      setModal((prev) => [...prev, modalType]);
      lockScroll();
    },
    [lockScroll, setModal]
  );

  const removeCurrentModal = useCallback(() => {
    setModal((prev) => prev.slice(0, -1));
    openScroll();
  }, [openScroll, setModal]);

  const clearModal = useCallback(() => {
    setModal([]);
    openScroll();
  }, [openScroll, setModal]);

  return { addModal, removeCurrentModal, clearModal };
}
