import { FC } from "react";
import styled from "styled-components";
import Logo from "./headComp/Logo";
import Navs from "./headComp/Navs";
import Search from "./headComp/Search";

const HeaderStyle = styled.div`
  padding: 5px 10px;
  background-color: #ffffff;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
