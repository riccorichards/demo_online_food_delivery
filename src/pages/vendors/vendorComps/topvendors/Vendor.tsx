import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled(Link)`
  text-decoration: none;
`;

interface VendorType {
  id: number;
  name: string;
  rating: number;
}
const Vendor: FC<{ vendor: VendorType }> = ({ vendor }) => {
  return (
    <Container key={vendor.id}>
      <Title to="">{`${vendor.id}) Restaurant: ${vendor.name} Rating: ${vendor.rating}`}</Title>
    </Container>
  );
};

export default Vendor;
