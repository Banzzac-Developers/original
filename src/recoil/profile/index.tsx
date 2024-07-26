import { MyProfile, PetProfile } from "@/models/profile";
import { atom } from "recoil";


export const myProfileState = atom<MyProfile>({
    key : "myProfileState",
    default : undefined
})

export const myPetProfileState = atom<PetProfile[]>({
    key : "myPetProfileState",
    default : undefined,
})