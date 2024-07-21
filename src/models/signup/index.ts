export interface UserInfo {
  email: string;
  nickname: string;
  gender: number;
  age: string;
}

export interface ProfileInfo {
  mbti: number[];
  walkingStyle: number[];
}

export interface PetInfo {
  age: string;
  name: string;
  weight: string;
  gender: number;
  neutralization: number;
  size: number;
  breed: number;
  personality: number[];
  activity: number;
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
