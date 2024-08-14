import API from "@/api/api";
import URLs from "@/api/urls";
import { useCallback } from "react";

export default function useRemoveFriend(user_id: string) {
  const removeFriend = useCallback(async () => {
    await API.delete(URLs.friends.removeFriend(user_id), {});
  }, []);

  return { removeFriend };
}
