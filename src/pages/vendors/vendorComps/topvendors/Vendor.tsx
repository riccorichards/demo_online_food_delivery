import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TopVendorsType } from "../../../../redux/ApiCall";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Link)`
  color: #032f05;
`;
const Rating = styled.span``;

const Vendor: FC<{ vendor: TopVendorsType }> = ({ vendor }) => {
  return (
    <Container key={vendor._id}>
      <Title to={`/vendor/${vendor._id}`}>Vendor: {vendor.name}</Title>
      <Rating>Rating: {vendor.rating}</Rating>
    </Container>
  );
};

export default Vendor;
