import { UserInfoList } from "@/models/friends";
import { atom } from "recoil";

export const frinedListState = atom<UserInfoList[]>({
    key: "frinedListState",
    default : undefined,
})