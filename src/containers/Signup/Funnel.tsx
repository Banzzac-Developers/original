import { useCallback, useState } from "react";
import UserInfoStep from "./UserInfoStep";
import ProfileInfoStep from "./ProfileInfoStep";
import PetInfoStep from "./PetInfoStep";
import CompleteStep from "./CompleteStep";
import {
  defaultPetInfo,
  defaultUserInfo,
  PetInfo,
  ProfileInfo,
  SignupSchema,
  UserInfo,
} from "@/models";
import API from "@/api/api";
import URLs from "@/api/urls";
import { encodeSignupSchema } from "@/utils";
import { z } from "zod";

type Step = "user" | "profile" | "pet" | "final";

export default function SignupFunnel() {
  const [step, setStep] = useState<Step>("user");
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    mbti: [],
    walkingStyle: -1,
  });
  const [petInfos, setPetInfos] = useState<PetInfo[]>([defaultPetInfo]);

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const validateUserInfo = useCallback(() => {
    const UserInfo = z.object({
      nickname: z.string().min(1),
      gender: z.number().min(0),
      age: z.string().min(1),
    });
    UserInfo.parse(userInfo);
  }, [userInfo]);

  const validateProfileInfo = useCallback(() => {
    const ProfileInfo = z.object({
      mbti: z.array(z.number()).min(4),
      walkingStyle: z.number().min(0),
    });
    ProfileInfo.parse(profileInfo);
  }, [profileInfo]);

  const validatePetInfos = useCallback(() => {
    const PetInfos = z
      .array(
        z.object({
          age: z.string().min(1),
          name: z.string().min(1),
          weight: z.string().min(1),
          gender: z.number().min(0),
          neutralization: z.number().min(0),
          size: z.number().min(0),
          breed: z.union([z.number().min(0), z.string().min(1)]),
          personality: z.array(z.number()).min(0),
          activity: z.number().min(0),
        }),
      )
      .min(1);
    PetInfos.parse(petInfos);
  }, [petInfos]);

  const validate = useCallback(
    (key: Step) => {
      switch (key) {
        case "profile":
          validateUserInfo();
          break;
        case "pet":
          validateProfileInfo();
          break;
        case "final":
          validatePetInfos();
          break;
      }
    },
    [validatePetInfos, validateProfileInfo, validateUserInfo],
  );

  const handleNextStep = useCallback(
    (key: Step) => {
      validate(key);
      setStep(key);
      scrollTop();
    },
    [validate],
  );

  const handleBeforeStep = useCallback((key: Step) => {
    setStep(key);
    scrollTop();
  }, []);

  const handleSubmit = useCallback(async () => {
    const body = encodeSignupSchema(userInfo, profileInfo, petInfos);
    const res = await API.post<SignupSchema, { message: string }>(
      URLs.signup,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    console.log(res);
  }, [petInfos, profileInfo, userInfo]);

  return (
    <>
      <form role="form" onSubmit={(e) => e.preventDefault()}>
        {step === "user" && (
          <UserInfoStep
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            onNext={() => handleNextStep("profile")}
          />
        )}
        {step === "profile" && (
          <ProfileInfoStep
            profileInfo={profileInfo}
            setProfileInfo={setProfileInfo}
            onBefore={() => handleBeforeStep("user")}
            onNext={() => handleNextStep("pet")}
          />
        )}
        {step === "pet" && (
          <PetInfoStep
            petInfos={petInfos}
            setPetInfos={setPetInfos}
            onBefore={() => handleBeforeStep("profile")}
            onNext={() => {
              handleSubmit();
              handleNextStep("final");
            }}
          />
        )}
      </form>
      {step === "final" && <CompleteStep />}
    </>
  );
}
