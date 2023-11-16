import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GrHomeRounded, GrRestaurant } from "react-icons/gr";
import { BsShop } from "react-icons/bs";
import { mobileDevice } from "../../../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
  gap: 5px;
  ${mobileDevice({ display: "none" })}
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
    </Container>
  );
};

export default Navs;
