import API from "@/api/api";
import URLs from "@/api/urls";
import { ProfileData } from "@/models/profile";
import { myPetProfileState, myProfileState } from "@/recoil/profile";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function useProfile(){
    const [myProfile, setMyProfile] = useRecoilState(myProfileState);
    const [petProfile, setPetProfile] = useRecoilState(myPetProfileState);

    const fetchProfile = useCallback(async ()=>{
        const result : ProfileData = await API.get(URLs.profile.fetchProfile);
        setMyProfile(result.data.humanProfileInfo);
        setPetProfile(result.data.petProfileInfos);
    },[]);

    useEffect(()=>{
        fetchProfile();
    },[])
    
    return {myProfile,petProfile};
}