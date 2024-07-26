const URLs = {
  mswTest: "/todo",
  chat: {
    fetchChatList: (id: string) => `/api/chat/${id}`,
  },
  profile: {
    fetchProfile : "/api/profile/info",
  },
  friends: {
    fetchFriendList : "/api/profile/friend/list",
    
  },
  signup: {
    registUser: "/api/member/createMember",
    registPet: (id: string) => `/api/member/createDog/${id}`,
  },
  matching: {
    fetchCondition: "api/matching/condition",
  },
};

export default URLs;
