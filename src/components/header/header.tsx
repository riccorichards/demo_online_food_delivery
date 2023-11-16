import { FC } from "react";
import styled from "styled-components";
import Logo from "./headComp/Logo";
import Navs from "./headComp/Navs";
import Search from "./headComp/Search";
import { mobileDevice } from "../../responsive";

const HeaderStyle = styled.div`
  padding: 5px 10px;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobileDevice({ position: "relative" })}
`;

const Header: FC = () => {
  return (
    <HeaderStyle>
      <Logo />
      <Navs />
      <Search />
    </HeaderStyle>
  );
};

export default Header;
