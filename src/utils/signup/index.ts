import {
  GENDER,
  MBTI,
  PET_ACTIVITY,
  PET_BREED,
  PET_PERSONALITY,
  PET_SIZE,
  WALKING_STYLE,
} from "@/constants";
import { PetInfo, ProfileInfo, SignupSchema, UserInfo } from "@/models";

export const encodeSignupSchema = (
  userInfo: UserInfo,
  profileInfo: ProfileInfo,
  petInfos: PetInfo[],
): SignupSchema => {
  const { nickname, age, gender: genderIdx } = userInfo;
  const { mbti: mbtiArr, walkingStyle, profileImage } = profileInfo;

  const gender = GENDER[genderIdx].value;
  const mbti = mbtiArr.map((v) => MBTI[v]).join("");
  const walking_style = WALKING_STYLE[walkingStyle].value;
  const humanProfile = {
    nick_name: nickname,
    gender,
    birth_year: age,
    walking_style,
    mbti: mbti,
    img_delete_flag: "N" as const,
  };

  const humanProfileImg = profileImage;

  const petProfile = petInfos.map(
    ({
      age,
      name,
      weight,
      gender,
      neutralization: neutralizationIdx,
      size,
      breed,
      personality,
      activity,
      petImage,
    }) => {
      const pet_gender = GENDER[gender].value;
      const pet_breed = typeof breed === "number" ? PET_BREED[breed] : breed;
      const neutralization = neutralizationIdx === 0;
      const pet_size = PET_SIZE[size].value;
      const pet_personality = personality.map((v) => PET_PERSONALITY[v].value);
      const activity_rate = PET_ACTIVITY[activity].value;

      return {
        pet_id: null,
        pet_name: name,
        pet_gender,
        pet_weight: weight,
        pet_breed,
        pet_birth_year: Number(age),
        neutralization,
        pet_size,
        pet_personality,
        activity_rate,
        img_delete_flag: "N" as const,
        target_img_name: petImage ? petImage.name : null,
      };
    },
  );
  return {
    humanProfile,
    humanProfileImg,
    petProfile,
  };
};
