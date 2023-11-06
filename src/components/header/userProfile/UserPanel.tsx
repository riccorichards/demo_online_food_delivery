import { Badge, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styled from "styled-components";
import { MdLogout } from "react-icons/md";
import { useAppDispatch } from "../../../redux/hook";
import { logOut } from "../../../redux/slice/AuthSlice";

const Container = styled.div`
  position: absolute;
  top: 100%;
  right: -2.5%;
  background-color: #fff;
  width: calc(100% + (-15px + (-7.5px)));
  z-index: 999;
  margin-top: 15px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    right: -3px;
    top: 13px;
    padding: 0 4px;
  }
`;

const UserPanel = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
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
            <StyledBadge badgeContent={4} color="warning">
              <AddShoppingCartIcon />
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
    </Container>
  );
};

export default UserPanel;
