import API from "@/api/api";
import URLs from "@/api/urls";
import { useCallback } from "react";

export default function useAddBlockFriend(id: string) {
  const addBlockFriend = useCallback(async () => {
    await API.put(URLs.friends.addBlockFriends(id), {});
  }, []);

  return { addBlockFriend };
}
