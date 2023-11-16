import styled from "styled-components";
import CartHeader from "./component/CartHeader";
import CartFoodList from "./component/CartFoodList";
import Checkout from "./component/Checkout";

const Container = styled.div`
  width: 100%;
  padding: 15px;
  margin-top: 35px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  height: calc(85vh - 35px);
`;

const Cart = () => {
  return (
    <Container>
      <CartHeader />
      <CartFoodList />
      <Checkout />
    </Container>
  );
};

export default Cart;
