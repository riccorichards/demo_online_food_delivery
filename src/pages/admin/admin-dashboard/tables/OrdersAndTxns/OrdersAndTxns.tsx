import styled from "styled-components";
import OrdersTable from "./OrdersTable";
import TxnsTable from "./TxnsTable";
import { useState } from "react";
import { Switch } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
`;

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;

const ContainerBody = styled.div``;

const OrdersAndTxns = () => {
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  const [isOrders, setIsOrders] = useState(true);
  return (
    <Container>
      <ContainerHeader>
        <span>Orders</span>
        <Switch
          {...label}
          defaultChecked
          color="warning"
          sx={{
            transform: "scale(0.8)",
          }}
          onClick={() => setIsOrders((prev) => !prev)}
        />
        <span>Transactions</span>
      </ContainerHeader>
      <ContainerBody>
        {isOrders ? <OrdersTable /> : <TxnsTable />}
      </ContainerBody>
    </Container>
  );
};

export default OrdersAndTxns;
