import API from "@/api/api";
import URLs from "@/api/urls";
import { useCallback } from "react";

export default function useUnblockFriend() {
  const removeBlockFriend = useCallback(async (user_id: string) => {
    await API.delete(URLs.friends.removeBlockFriend(user_id), {});
  }, []);

  return { removeBlockFriend };
}
