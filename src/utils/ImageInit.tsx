import User from "@/assets/images/User.png";
import Pet from "@/assets/images/Pet.jpg";

// 기본 이미지가 펫과 유저가 같을 경우에는 하나의 함수로도 같게 만들면 됨.


export const isThereUserImage = (url:string)=>{
    return url === "" || url === undefined ? User : url;
}

export const isTherePetImage = (url:string) =>{
    return url === "" || url === undefined ? Pet : url;
}