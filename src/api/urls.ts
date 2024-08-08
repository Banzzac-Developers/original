const URLs = {
  mswTest: "/todo",
  chat: {
    fetchChatList: (id: string) => `/api/chat/${id}`,
  },
  profile: {
    fetchProfile: "/api/profile/info",
  },
  friends: {
    fetchFriendList: "/api/profile/friend/list",
    addBlockFriends: (id: string) => `/api/profile/block/${id}`,
  },
  signup: "/api/profile/sign-up",
  matching: {
    fetchCondition: "api/matching/condition",
  },
};

export default URLs;
