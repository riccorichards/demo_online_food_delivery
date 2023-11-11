import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ListOfVendorsType } from "../../../../redux/ApiCall";
import { FcShop } from "react-icons/fc";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FakeImage = styled(FcShop)`
  width: 100px;
  height: 100px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
  border-radius: 15px;
`;

const Title = styled(Link)`
  text-decoration: none;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  gap: 15px;
`;

const SeparateLine = styled.div`
  width: 80%;
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);
  height: 0.5px;
  margin: 0 auto;
  background-color: #80808048;
  border-radius: 15px;
`;

const Vendor: FC<{ vendor: ListOfVendorsType }> = ({ vendor }) => {
  return (
    <>
      <Container key={vendor._id}>
        {vendor.coverImage ? vendor.coverImage : <FakeImage />}
        <Item>
          <span>Vendors:</span>
          <Title to={`/vendor/${vendor._id}`}>{vendor.name}</Title>
        </Item>
        <Item>
          <span>Categories:</span>
          {vendor.foodType}
        </Item>
        <Item>
          <span>Address:</span>
          <Item>{vendor.address}</Item>
        </Item>
        <Item>
          <span>Menu:</span>
          {vendor.foods}
        </Item>
        <Item>
          <span>Email:</span>
          {vendor.email}
        </Item>
        <Item>
          <span>Phone:</span>
          {vendor.phone}
        </Item>
        <Item>
          <span>Open:</span>
          {vendor.serviceAvailable}
        </Item>
        <Item>
          <span>Rating:</span>
          {vendor.rating}
        </Item>
      </Container>
      <SeparateLine />
    </>
  );
};

export default Vendor;
