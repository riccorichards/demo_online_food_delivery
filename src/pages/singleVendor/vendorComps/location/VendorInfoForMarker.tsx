import { FC } from "react";
import { FcShop } from "react-icons/fc";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);
  padding: 2.5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);
`;
const ShopStyle = styled(FcShop)`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 0 5.5px rgba(0, 0, 0, 0.35);
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
`;

export type VendorInfo = {
  coverImage: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  rating: string | null;
};
const VendorInfoForMarker: FC<{ vendor: VendorInfo }> = ({ vendor }) => {
  return (
    <Container>
      {vendor.coverImage ? <Image src={vendor.coverImage} /> : <ShopStyle />}
      <Title>{vendor.name}</Title>
      <span>{vendor.email}</span>
      <span>{vendor.phone}</span>
      <span>{vendor.rating}</span>
    </Container>
  );
};

export default VendorInfoForMarker;
