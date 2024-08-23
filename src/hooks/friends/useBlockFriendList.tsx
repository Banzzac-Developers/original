import API from "@/api/api";
import URLs from "@/api/urls";
import { UserInfoList, UserInfoListData } from "@/models/friends";
import { useCallback, useEffect, useState } from "react";

export default function useBlockFriendList() {
  const [blockFriendList, setBlockFriendList] = useState<UserInfoList[]>();

  const fetchBlockFriendList = useCallback(async () => {
    const result: UserInfoListData = await API.get(
      URLs.friends.fetchBlockFriendList,
    );
    setBlockFriendList(result.data.user_info_list);
  }, []);

  useEffect(() => {
    fetchBlockFriendList();
  }, []);

  return { blockFriendList, setBlockFriendList };
}
