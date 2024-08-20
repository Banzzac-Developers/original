import URLs from "@/api/urls";
import { HttpResponse, http } from "msw";

export default [
  // 테스트 용도
  http.get("/todo", () => {
    return HttpResponse.json(["eat", "drink", "sleep"]);
  }),
  // 친구 리스트
  http.get(URLs.friends.fetchFriendList, () => {
    return HttpResponse.json({
      result: "SUCCESS",
      data: {
        user_info_list: FriendInfos,
      },
      message: "친구 리스트 획득에 성공하였습니다.",
      error_code: null,
    });
  }),
  // Profile ==> 내정보 가져오기
  http.get(URLs.profile.fetchProfile, () =>
    HttpResponse.json(SuccessFetchProfile),
  ),
];

const SuccessFetchProfile = {
  result: "SUCCESS",
  data: {
    humanProfileInfo: {
      nick_name: "test",
      birth_year: "1997",
      gender: "MALE",
      number_weekly_walks: "6",
      average_walking_time: "2",
      walking_style: "TALKING",
      walking_speed: "NORMAL",
      profile_temperature: "39.3",
      profile_img: {
        key: "human_profile/3260305273",
        url: "",
      },
      introduction: "I'm dongjun",
      mbti: "INFJ",
    },
    petProfileInfos: [
      {
        pet_nick_name: "bababa",
        pet_birth_year: "2010",
        pet_gender: "FEMALE",
        pet_breed: "믹스",
        pet_size: "MEDIUM",
        pet_weight: "30",
        neutralization: "Y",
        activity_rate: "COMMONLY",
        pet_personality: ["QUIET"],
        pet_profile_img: {
          key: "pet_profile/18",
          url: "",
        },
        pet_introduction: "I'm pet",
      },
      {
        pet_nick_name: "nnnn",
        pet_birth_year: "2010",
        pet_gender: "MALE",
        pet_breed: "믹스",
        pet_size: "MEDIUM",
        pet_weight: "30",
        neutralization: "Y",
        activity_rate: "COMMONLY",
        pet_personality: ["QUIET"],
        pet_profile_img: {
          key: "pet_profile/21",
          url: "",
        },
        pet_introduction: "I'm pet",
      },
    ],
  },
  message: "프로필 조회 성공",
  error_code: null,
};

const FriendInfos = [
  {
    user_id: "1",
    nick_name: "괴수 8호",
    profile_img_url: undefined,
    pet_name: "카프카",
    pet_img_url: undefined,
  },
  {
    user_id: "2",
    nick_name: "후시구로 메구미",
    profile_img_url: undefined,
    pet_name: "안녕토끼",
    pet_img_url: undefined,
  },
  {
    user_id: "3",
    nick_name: "고죠 사토루",
    profile_img_url: undefined,
    pet_name: "안대",
    pet_img_url: undefined,
  },
  {
    user_id: "4",
    nick_name: "루피",
    profile_img_url: undefined,
    pet_name: "고무고무열매",
    pet_img_url: undefined,
  },
  {
    user_id: "5",
    nick_name: "언노운",
    profile_img_url: undefined,
    pet_name: "언디파인드",
    pet_img_url: undefined,
  },
];
