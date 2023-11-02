import styled from "styled-components";
import AllFoods from "./AllFoods";
import AllOrders from "./AllOrders";
import AllFeeds from "./AllFeeds";
import Incoming from "./Incoming";
import Expenses from "./Expenses";

const Container = styled.div`
display: flex;
align-items: center;
gap: 15px;
`;

const Overview = () => {
  return (
    <Container>
      <AllFoods />
      <AllOrders />
      <AllFeeds />
      <Incoming />
      <Expenses />
    </Container>
  );
};

export default Overview;
