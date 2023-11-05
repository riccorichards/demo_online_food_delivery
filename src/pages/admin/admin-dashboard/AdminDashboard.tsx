import styled from "styled-components";
import Overview from "./dashboardComps/overview/Overview";
import Foodsandvendors from "./tables/foodsandvendors/Foodsandvendors";
import DeliveryPerson from "./tables/DeliveryPerson";
import OrdersAndTxns from "./tables/OrdersAndTxns/OrdersAndTxns";

const Container = styled.div`
  padding: 15px 0;
  gap: 15px;
  display: flex;
  flex-direction: column;
`;

const OrdersAndDeliveryPersons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const DeliveryPersonsWrapper = styled.div`
  flex: 2;
`;
const OrdersAndTxnsWrapper = styled.div`
  flex: 1;
`;
const AdminDashboard = () => {
  return (
    <Container>
      <Overview />
      <Foodsandvendors />
      <OrdersAndDeliveryPersons>
        <DeliveryPersonsWrapper>
          <DeliveryPerson />
        </DeliveryPersonsWrapper>
        <OrdersAndTxnsWrapper>
          <OrdersAndTxns />
        </OrdersAndTxnsWrapper>
      </OrdersAndDeliveryPersons>
    </Container>
  );
};

export default AdminDashboard;
