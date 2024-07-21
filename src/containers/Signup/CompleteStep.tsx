import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CompleteStep() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);
  return <div>반갑습니다! 회원이 되신 것을 환영합니다.</div>;
}
