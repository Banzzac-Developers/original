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

  const handleStep = useCallback((key: Step) => {
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
    <form role="form" onSubmit={(e) => e.preventDefault()}>
      {step === "user" && (
        <UserInfoStep
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          onNext={() => handleStep("profile")}
        />
      )}
      {step === "profile" && (
        <ProfileInfoStep
          profileInfo={profileInfo}
          setProfileInfo={setProfileInfo}
          onBefore={() => handleStep("user")}
          onNext={() => handleStep("pet")}
        />
      )}
      {step === "pet" && (
        <PetInfoStep
          petInfos={petInfos}
          setPetInfos={setPetInfos}
          onBefore={() => handleStep("profile")}
          onNext={() => {
            handleSubmit();
            handleStep("final");
          }}
        />
      )}
      {step === "final" && <CompleteStep />}
    </form>
  );
}
