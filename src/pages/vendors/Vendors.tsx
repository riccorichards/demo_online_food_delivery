import styled from "styled-components";
import Stories from "./vendorComps/stories/Stories";
import TopVendors from "./vendorComps/topvendors/TopVendors";
import ListOfVendors from "./vendorComps/listOfVendors/ListOfVendors";

const Container = styled.div`
  margin-top: 35px;
  height: 2000px;
`;
const Content = styled.div`
  margin-top: 35px;
  display: flex;
  gap: 15px;
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
      <Stories />
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
