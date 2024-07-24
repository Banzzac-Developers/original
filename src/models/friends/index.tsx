import { ResData } from "../common"

export type UserInfoList = {
    user_id : string,
    nick_name : string,
    profile_img_url : string,
    pet_name : string,
    pet_img_url: string
}

export interface UserInfoListData extends ResData{
    data : {user_info_list : UserInfoList[]};
}