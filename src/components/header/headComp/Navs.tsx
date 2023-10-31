import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GrHomeRounded, GrRestaurant, GrContactInfo } from "react-icons/gr";
import { BsShop } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 33%;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const NavStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-weight: 600;
  color: #032f05;
`;

const Navs: FC = () => {
  return (
    <Container>
      <NavContainer>
        <GrHomeRounded />
        <NavStyle to="/">Home</NavStyle>
      </NavContainer>
      <NavContainer>
        <BsShop />
        <NavStyle to="/shop">Shop</NavStyle>
      </NavContainer>
      <NavContainer>
        <GrRestaurant />
        <NavStyle to="/vendor">Vendor</NavStyle>
      </NavContainer>
      <NavContainer>
        <GrContactInfo />
        <NavStyle to="/about-me">About me</NavStyle>
      </NavContainer>
    </Container>
  );
};

export default Navs;
