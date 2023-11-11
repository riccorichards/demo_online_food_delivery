import styled from "styled-components";
import Vendor from "./Vendor";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { getVendors } from "../../../../redux/ApiCall";

const Container = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
`;

const ListOfVendors = () => {
  const dispatch = useAppDispatch();
  const { vendors } = useAppSelector((state) => state.vendor);
  useEffect(() => {
    dispatch(getVendors());
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Container>
      {vendors &&
        vendors.map((vendor) => <Vendor vendor={vendor} key={vendor._id} />)}
    </Container>
  );
};

export default ListOfVendors;
