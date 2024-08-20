import SvgSelector from "@/components/Svg/SvgSelector";
import { MENU_LIST } from "@/constants";
import { SvgIcon } from "@/models";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

export default function Navigator() {
  const location = useLocation();

  return (
    <NavContainer>
      <Ul>
        {MENU_LIST.map(({ name, link, icon }) => (
          <li key={name}>
            <NavLink
              to={link}
              color={location.pathname === link ? "#A86EFA" : "#212121"}
            >
              <SvgSelector
                svg={icon as SvgIcon}
                width={24}
                height={24}
                stroke={location.pathname === link ? "#A86EFA" : "#212121"}
              />
              <p>{name}</p>
            </NavLink>
          </li>
        ))}
      </Ul>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  bottom: 10px;
  border: 1px solid #212121;
  z-index: 1;
  background-color: #fff;
  width: calc(100% - 48px);
  margin: 0 24px;
  border-radius: 56px;
  padding: 5px 20px;
  box-shadow: 0px 1px 3px 0px #0000004d;
  box-shadow: 0px 4px 8px 3px #00000026;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    font-size: 10px;
    line-height: 20px;
    font-weight: 600;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavLink = styled(Link)<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
`;
