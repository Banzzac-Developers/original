import DividerDefault from "@/components/Divider/Divider";
import { FrinedsList } from "@/containers/Friends/FriendList";
import useFriendList from "@/hooks/friends/useFriendList";
import SqueareHeader from "@/layouts/SquereHeader";
import { frinedListState } from "@/recoil/friends";
import { useRecoilValue } from "recoil";

/**해야 할 것
 * 1. 마이 프로필을 만들 것
 */


export default function Friends(){
    useFriendList();
    const friendList = useRecoilValue(frinedListState); 
    console.log(friendList);
       
    return (
    <>
        <SqueareHeader title="친구" headerIcons={[
            {
                icon : "search",
                onClick:()=>{}
            },
            {
                icon : "friendAdd",
                onClick:()=>{}
            },
            {
                icon : "setting",
                onClick:()=>{}
            },
        ]} 
        />
        <DividerDefault width="100%"/>
        <FrinedsList friendList={friendList}/>
    </>
    )

}