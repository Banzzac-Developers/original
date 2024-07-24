import URLs from "@/api/urls";
import { HttpResponse, http } from "msw";

export default [
  // 테스트 용도
  http.get("/todo", () => {
    return HttpResponse.json(["eat", "drink", "sleep"]);
  }),
  // 친구 리스트
  http.get(URLs.friends.fetchFriendList,
    ()=> {
      return HttpResponse.json({
      "result": "SUCCESS",
      "data": {
          "user_info_list": [
            FriendInfo,
            FriendInfo,
            FriendInfo,
            FriendInfo,
            FriendInfo
          ]
      },
      "message": "친구 리스트 획득에 성공하였습니다.",
      "error_code": null
  })}
  )
];


const FriendInfo ={
  "user_id": "3260305274",
  "nick_name": "후시구로 메구미",
  "profile_img_url": undefined,
  "pet_name": "안녕토끼",
  "pet_img_url": undefined
}