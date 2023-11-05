import styled from "styled-components";
import FoodsTable from "./FoodsTable";
import VendorsTable from "./VendorsTable";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const FoodsTableWrapper = styled.div`
  flex: 1;
`;
const VendorsTableWrapper = styled.div`
  flex: 1.5;
`;
const Foodsandvendors = () => {
  return (
    <Container>
      <FoodsTableWrapper>
        <FoodsTable />
      </FoodsTableWrapper>
      <VendorsTableWrapper>
        <VendorsTable />
      </VendorsTableWrapper>
    </Container>
  );
};

export default Foodsandvendors;
