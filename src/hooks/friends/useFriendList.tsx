import API from "@/api/api";
import URLs from "@/api/urls";
import { UserInfoListData } from "@/models/friends";
import { frinedListState } from "@/recoil/friends";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

// 값이 왜 셋팅 되질 않는가!!!
export default function useFriendList(){
    const [friendList, setFriendList] = useRecoilState(frinedListState);

    const fetchFrinedList = useCallback(async ()=>{
        const result : UserInfoListData = await API.get(URLs.friends.fetchFriendList);
        setFriendList(result.data.user_info_list);
    },[]);

    useEffect(()=>{
        fetchFrinedList();
    },[])
    
    return friendList;
}