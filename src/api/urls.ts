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
    fetchBlockFriendList: "/api/profile/block/list",
    addBlockFriends: (user_id: string) => `/api/profile/block/${user_id}`,
    removeFriend: (user_id: string) => `/api/profile/friend/${user_id}`,
  },
  signup: "/api/profile/sign-up",
  matching: {
    fetchCondition: "api/matching/condition",
  },
};

export default URLs;
