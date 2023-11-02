import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const FakeImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: grey;
`;

const Title = styled(Link)`
  text-decoration: none;
`;

interface VendorType {
  id: number;
  title: string;
  ordersAmount: number;
  cuisines: string;
  address: string;
}
const Vendor: FC<{ vendor: VendorType }> = ({ vendor }) => {
  return (
    <Container key={vendor.id}>
      <FakeImage />
      <Title to="">{vendor.title}</Title>
      <span>{vendor.ordersAmount}</span>
      <span>{vendor.cuisines}</span>
      <span>{vendor.address}</span>
    </Container>
  );
};

export default Vendor;
