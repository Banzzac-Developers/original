/*  1. 더블 프로필 이미지
    2. 친구 이름 | 강아지 이름
    3. 친구 상태 메세지
    4. 슬라이드 시 차단하기 버튼 ON
   */

import { UserInfoList } from "@/models/friends";
import styled from "@emotion/styled"


type Props = {
    friendList : UserInfoList[];
}

export const FrinedsList = ({friendList}:Props) =>{


    return (<Container>
        <SubTitle>친구</SubTitle>
        <Ul>
            {friendList?.map((friend,idx)=>(
                <p key={idx}>{friend.nick_name}</p>
            ))}
        </Ul>
    </Container>)
}

const Container = styled.div`
    
`;

const SubTitle = styled.h6`
    padding : 0px 10px;
`

const Ul = styled.ul`

`

