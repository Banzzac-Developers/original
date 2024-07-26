import { ResData } from "../common";

export type MyProfile ={
    nick_name :string;
    birth_year:string;
    gender:string;
    number_weekly_walks:string;
    average_walking_time:string;
    walking_style:string;
    walking_speed:string;
    profile_temperature:string;
    profile_img:ProfileImg;
    introduction:string;
    mbti:string;
}

export type PetProfile = {
    pet_nick_name:string;
    pet_birth_year:string;
    pet_gender:string;
    pet_breed:string;
    pet_size:string;
    pet_weight:string;
    neutralization:string;
    activity_rate:string;
    pet_personality:string[];
    pet_profile_img:ProfileImg;
    pet_introduction:string;
}

type ProfileImg ={
    key:string;
    url:string;
}

export interface ProfileData extends ResData{
    data : {
        humanProfileInfo : MyProfile;
        petProfileInfos : PetProfile[];
    }
}