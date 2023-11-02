import styled from "styled-components";
import IncomingWithAvg from "./IncomingWithAvg";
import NetProfit from "./NetProfit";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const InAndEx = () => {
  return (
    <Container>
      <IncomingWithAvg />
      <NetProfit />
    </Container>
  );
};

export default InAndEx;
