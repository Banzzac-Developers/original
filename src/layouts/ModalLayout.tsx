import ModalRenderer from "@/components/Modal/ModalRenderer";
import { modalState } from "@/recoil";
import { useRecoilValue } from "recoil";

export default function ModalLayout() {
  const modals = useRecoilValue(modalState);

  return <>{modals.length !== 0 && <ModalRenderer />}</>;
}
