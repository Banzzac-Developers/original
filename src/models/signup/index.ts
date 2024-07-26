import {
  GENDER,
  PET_ACTIVITY,
  PET_PERSONALITY,
  PET_SIZE,
  WALKING_STYLE,
} from "@/constants";

export interface UserInfo {
  email: string;
  nickname: string;
  gender: number;
  age: string;
}

export const defaultUserInfo = {
  email: "",
  nickname: "",
  gender: -1,
  age: "",
};

export interface ProfileInfo {
  profileImage?: File;
  mbti: number[];
  walkingStyle: number;
}

export interface PetInfo {
  age: string;
  name: string;
  weight: string;
  gender: number;
  neutralization: number;
  size: number;
  breed: number | string;
  personality: number[];
  activity: number;
  petImage?: File;
}

export const defaultPetInfo = {
  age: "",
  name: "",
  weight: "",
  gender: -1,
  neutralization: -1,
  size: -1,
  breed: -1,
  personality: [],
  activity: -1,
};

type Gender = (typeof GENDER)[number]["value"];
type WalkingStyle = (typeof WALKING_STYLE)[number]["value"];
type WalkingSpeed = "SLOW" | "NORMAL" | "FAST";
type PetSize = (typeof PET_SIZE)[number]["value"];
type PetPersonality = (typeof PET_PERSONALITY)[number]["value"];
type ActivityRate = (typeof PET_ACTIVITY)[number]["value"];

export interface SignupSchema {
  petProfileImg?: File;
  humanProfileImg?: File;
  humanProfile: {
    nick_name: string; // max-length = 15
    gender: Gender;
    birth_year: string;
    introduction?: string; // max-length = 50
    number_weekly_walks?: string;
    average_walking_time?: string;
    walking_speed?: WalkingSpeed;
    walking_style: WalkingStyle;
    mbti: string;
    img_delete_flag: "N";
  };
  petProfile: {
    pet_id: null;
    pet_name: string; // max-length 10
    pet_gender: Gender;
    pet_breed: string;
    pet_birth_year: number;
    neutralization: boolean;
    pet_weight: string;
    pet_size: PetSize;
    pet_personality: PetPersonality[];
    pet_introduction?: string; // max-length 50
    activity_rate: ActivityRate;
    img_delete_flag: "N";
    target_img_name: string | null;
  }[];
}
