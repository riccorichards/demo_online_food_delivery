import styled from "styled-components";
import TopVendors from "./vendorComps/topvendors/TopVendors";
import ListOfVendors from "./vendorComps/listOfVendors/ListOfVendors";
import { mobileDevice } from "../../responsive";

const Container = styled.div`
  margin-top: 35px;
  padding: 15px;
`;
const Content = styled.div`
  margin-top: 35px;
  display: flex;
  gap: 15px;
  ${mobileDevice({ display: "flex", flexDirection: "column" })}
`;

const TopVendorsWrapper = styled.div`
  flex: 1.1;
`;
const ListOfVendorsWrapper = styled.div`
  flex: 3;
`;
const Vendors = () => {
  return (
    <Container>
      <Content>
        <TopVendorsWrapper>
          <TopVendors />
        </TopVendorsWrapper>
        <ListOfVendorsWrapper>
          <ListOfVendors />
        </ListOfVendorsWrapper>
      </Content>
    </Container>
  );
};

export default Vendors;
