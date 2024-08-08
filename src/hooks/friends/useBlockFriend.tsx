import API from "@/api/api";
import URLs from "@/api/urls";
import { useCallback } from "react";

export default function useAddBlockFriend(user_id: string) {
  const addBlockFriend = useCallback(async () => {
    await API.put(URLs.friends.addBlockFriends(user_id), {});
  }, []);

  return { addBlockFriend };
}
