import { HttpResponse, http } from "msw";

export default [
  http.get("/todo", () => {
    return HttpResponse.json(["eat", "drink", "sleep"]);
  }),
];
