import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 35px;
  margin: 0;
`;

const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: inherit;
`;

const Icon = styled(IoArrowBack)`
  font-size: 24px;
`;
const CartHeader = () => {
  return (
    <Container>
      <Title>Cart Page</Title>
      <LinkStyle to="/shop">
        <Icon />
        Go Back To Shopping
      </LinkStyle>
    </Container>
  );
};

export default CartHeader;
