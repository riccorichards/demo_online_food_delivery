import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styled from "styled-components";
import { MdLogout } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logOut } from "../../../redux/slice/AuthSlice";
import { Link } from "react-router-dom";
import { mobileDevice } from "../../../responsive";
import { useEffect, useState } from "react";

const Container = styled.div`
  position: absolute;
  top: 100%;
  right: -2.5%;
  background-color: #fff;
  width: calc(100% + (-15px + (-15px)));
  z-index: 999;
  margin-top: 15px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${mobileDevice({
    display: "flex",
    width: "100%",
    height: "40vh",
  })}
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Item = styled.div``;

const LogOutStyle = styled.div`
  font-size: 24px;
  border: 1px solid rgba(0, 0, 0, 0.35);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: all 0.35s ease-in;

  &:hover {
    background-color: #ff00008b;
    cursor: pointer;
  }
`;

const LinkStype = styled(Link)`
  color: inherit;
`;

const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    right: -3px;
    top: 13px;
    padding: 0 4px;
  }
`;

const NavPlace = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const UserPanel = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <ItemsWrapper>
        <Item>Status:</Item>
        <Item>Customer</Item>
      </ItemsWrapper>
      <ItemsWrapper>
        <Item>Cart:</Item>
        <Item>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart?.length} color="warning">
              <LinkStype to="/cart">
                <AddShoppingCartIcon />
              </LinkStype>
            </StyledBadge>
          </IconButton>
        </Item>
      </ItemsWrapper>
      <ItemsWrapper>
        <Item>Log out:</Item>
        <LogOutStyle>
          <MdLogout onClick={() => handleLogOut()} />
        </LogOutStyle>
      </ItemsWrapper>
      {screenSize <= 430 && (
        <NavPlace>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/vendor">Vendors</Link>
        </NavPlace>
      )}
    </Container>
  );
};

export default UserPanel;
