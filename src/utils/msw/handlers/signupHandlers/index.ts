import { HttpResponse, http } from "msw";

export default [
  http.post("/api/profile/sign-up", () => {
    return HttpResponse.json(
      {
        result: null,
        data: null,
        message: "회원가입 성공",
        error_code: null,
      },
      { status: 201 },
    );
  }),
];
