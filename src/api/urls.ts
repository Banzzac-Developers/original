const URLs = {
  mswTest: "/todo",
  chat: {
    fetchChatList: (id: string) => `/api/chat/${id}`,
  },
  profile: {
    fetchProfile: (id: string) => `/api/profile/${id}`,
    fetchPets: (id: string) => `/api/profile/dog/${id}`,
    addPet: (id: string) => `/api/profile/dog/${id}`,
    updateProfile: (id: string) => `/api/profile/${id}`,
    updateStatusMessage: "/api/profile/status",
    updatePet: (id: string, name: string) => `/api/profile/dog/${id}/${name}`,
    deletePet: (id: string, name: string) =>
      `/api/profile/dog/${id}/delete/${name}`,
    withdrawal: (id: string) => `/api/profile/${id}/withdraw`,
    fetchPayment: (id: string) => `/api/payment/${id}`,
    addPayment: "/api/payment/ready",
    fetchRefund: "/api/payment/refund",
  },
  friends: {
    fetchFriendList: `/api/friend/list`,
    deleteFriend: (friendId: string) => `/api/friend/delete/${friendId}`,
    fetchFavoriteFriendList: `/api/friend/favoriteList`,
    addFavoriteFriend: (friendId: string) =>
      `/api/friend/friendFavorite/${friendId}`,
    deleteFavoriteFriend: (friendId: string) =>
      `/api/friend/friendUnFavorite/${friendId}`,
    fetchBlockFriendList: `/api/friend/blockList`,
    addBlockFriend: (friendId: string) => `/api/friend/friendBlock/${friendId}`,
    deleteBlockFriend: (friendId: string) =>
      `/api/friend/friendUnBlock/${friendId}`,
  },
  signup: "/api/profile/sign-up",
  matching: {
    fetchCondition: "api/matching/condition",
  },
};

export default URLs;
