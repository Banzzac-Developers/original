import Header from "@/components/Header";
import { HeaderIcon } from "@/models"
import styled from "@emotion/styled";

type Icon = {
    icon: HeaderIcon;
    onClick: ()=>void;
}

type Props = {
    title : string;
    headerIcons : Icon[];
}

export default function SqueareHeader({title, headerIcons} : Props){
    return (
        <Container>
            <Header.Title title={title}/>
            <div>
                <ul>
                    {headerIcons.map(({icon,onClick },idx)=>
                        (
                            <li key={idx}>
                                <Header.IconButton onClick={onClick} icon={icon} />
                            </li>
                        )
                    )}
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.header`
  padding: 8px 20px 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }
`;