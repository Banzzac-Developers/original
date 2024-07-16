import { Modal } from "@/models";
import { atom } from "recoil";

export const modalState = atom<Modal[]>({
  key: "modalState",
  default: [],
});
