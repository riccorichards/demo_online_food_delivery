import styled from "styled-components";
import Vendor from "./Vendor";

const Container = styled.div`
  border-radius: 15px;
  background-color: #fff;
  padding: 15px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: orangered;
`;

const Content = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const TopVendors = () => {
  const fakeVendors = [
    { id: 1, name: "vendor_1", rating: 4658 },
    { id: 2, name: "vendor_2", rating: 1564 },
    { id: 3, name: "vendor_3", rating: 1233 },
    { id: 4, name: "vendor_4", rating: 1123 },
    { id: 5, name: "vendor_5", rating: 1056 },
    { id: 6, name: "vendor_6", rating: 1000 },
    { id: 7, name: "vendor_7", rating: 956 },
    { id: 8, name: "vendor_8", rating: 900 },
    { id: 9, name: "vendor_9", rating: 856 },
    { id: 10, name: "vendor_10", rating: 850 },
  ];
  return (
    <Container>
      <Title>Top vendors by customers feed backs</Title>
      <Content>
        {fakeVendors.map((vendor) => (
          <Vendor vendor={vendor} />
        ))}
      </Content>
    </Container>
  );
};

export default TopVendors;
