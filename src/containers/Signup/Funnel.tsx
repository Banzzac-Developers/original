import { useState } from "react";
import EmailInfo from "./EmailInfo";
import PersonInfo from "./PersonInfo";
import PetInfo from "./PetInfo";

export default function SignupFunnel() {
  const [step, setStep] = useState("email");
  return (
    <>
      {step === "email" && <EmailInfo onNext={() => setStep("person")} />}
      {step === "person" && (
        <PersonInfo
          onBefore={() => setStep("email")}
          onNext={() => setStep("pet")}
        />
      )}
      {step === "pet" && (
        <PetInfo
          onNext={() => setStep("final")}
          onBefore={() => setStep("person")}
        />
      )}
    </>
  );
}
