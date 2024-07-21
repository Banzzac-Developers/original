import { FrinedsList } from "@/containers/Friends/FriendList";
import useFriendList from "@/hooks/friends/useFriendList";
import { frinedListState } from "@/recoil/friends";
import { useRecoilValue } from "recoil";

export default function Friends(){
    useFriendList();
    const friendList = useRecoilValue(frinedListState);
    
    console.log(friendList);
    

    return <FrinedsList friendList={friendList} />
}