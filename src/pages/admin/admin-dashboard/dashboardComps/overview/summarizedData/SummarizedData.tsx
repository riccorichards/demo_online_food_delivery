import styled from "styled-components";
import FoodAmount from "./FoodAmount";
import SellAmount from "./SellsAmount";
import Incoming from "./Incoming";
import UsersAmount from "./UsersAmount";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const DataWrapper = styled.div`
  margin-top: 15px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(118, 112, 112, 0.35);
`;

const SummarizedData = () => {
  return (
    <Container>
      <DataWrapper>
        <FoodAmount />
      </DataWrapper>
      <DataWrapper>
        <SellAmount />
      </DataWrapper>
      <DataWrapper>
        <Incoming />
      </DataWrapper>
      <DataWrapper>
        <UsersAmount />
      </DataWrapper>
    </Container>
  );
};

export default SummarizedData;
