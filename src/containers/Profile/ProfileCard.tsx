import styled from "@emotion/styled"
import { Infomations, Namse, ProfileImg, StatusMsg } from "../Friends/FriendCard";
import { DoubleProfileImage } from "@/components/ProfileImage/ProfileImage";
import { isTherePetImage, isThereUserImage } from "@/utils/ImageInit";

type Props ={
    nick_name : string;
    profile_img?: string;
    introduction ?: string;
    pet_nick_name ?: string;
    pet_profile_img?: string;
}

export default function ProfileCard({
    nick_name,
    profile_img,
    introduction,
    pet_nick_name,
    pet_profile_img
}:Props){
    const userImg = isThereUserImage(profile_img);
    const petImg = isTherePetImage(pet_profile_img);

    return (
        <Container>
            <ProfileImg>
                <DoubleProfileImage
                    border={3}
                    size={48}
                    borderColor="#fff"
                    left={40}
                    img={userImg}
                    img2={petImg}
                />
            </ProfileImg>
            <Infomations>
                <Namse>
                    {nick_name} {pet_nick_name ==="" || pet_nick_name === undefined ?
                    "": `| ${pet_nick_name}`}
                 </Namse>
                <StatusMsg>{
                introduction ==="" || introduction === undefined ?
                 "" 
                 : introduction}</StatusMsg>
            </Infomations>
        </Container>
    )
}

const Container = styled.div``;