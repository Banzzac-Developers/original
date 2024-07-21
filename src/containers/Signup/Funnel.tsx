import { useState } from "react";
import UserInfoStep from "./UserInfoStep";
import ProfileInfoStep from "./ProfileInfoStep";
import PetInfoStep from "./PetInfoStep";
import CompleteStep from "./CompleteStep";
import {
  defaultPetInfo,
  PetInfo,
  ProfileInfo,
  UserInfo,
} from "@/models/signup";

type Step = "user" | "profile" | "pet" | "final";

export default function SignupFunnel() {
  const [step, setStep] = useState<Step>("user");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    nickname: "",
    gender: -1,
    age: "",
  });
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    mbti: [],
    walkingStyle: [],
  });
  const [petInfos, setPetInfos] = useState<PetInfo[]>([defaultPetInfo]);

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const handleStep = (key: Step) => {
    setStep(key);
    scrollTop();
  };

  return (
    <>
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
          onNext={() => handleStep("final")}
        />
      )}
      {step === "final" && <CompleteStep />}
    </>
  );
}
