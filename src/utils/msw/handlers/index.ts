import URLs from "@/api/urls";
import { HttpResponse, http } from "msw";

export default [
  // 테스트 용도
  http.get("/todo", () => {
    return HttpResponse.json(["eat", "drink", "sleep"]);
  }),
  // 친구 리스트
  http.get(URLs.friends.fetchFriendList,
    ()=> HttpResponse.json({
      "result": "SUCCESS",
      "data": {
          "user_info_list": [
              {
                  "user_id": "3260305274",
                  "nick_name": "test3",
                  "profile_img_url": "https://img-data-bucket.s3.ap-northeast-2.amazonaws.com/human_profile/3260305274",
                  "pet_name": "bababa",
                  "pet_img_url": "aaaa"
              }
          ]
      },
      "message": "친구 리스트 획득에 성공하였습니다.",
      "error_code": null
  })
  )
];
