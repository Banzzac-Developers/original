import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CompleteStep() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);
  return (
    <Container>
      <strong>반갑습니다!</strong>
      <div>회원이 되신 것을 환영합니다.</div>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  strong {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  div {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }
`;
