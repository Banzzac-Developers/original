import URLs from "@/api/urls";
import { FrinedsList } from "@/containers/Friends/FriendList";
import useFriendList from "@/hooks/friends/useFriendList";
import { frinedListState } from "@/recoil/friends";
import { useRecoilValue } from "recoil";

export default function Friends(){
    useFriendList();
    const friendList = useRecoilValue(frinedListState);
    
    console.log(friendList);
    console.log(URLs.friends.fetchFriendList);
    

    return <FrinedsList friendList={friendList} />
}