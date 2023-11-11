import styled from "styled-components";
import Vendor from "./Vendor";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { useEffect } from "react";
import { getTopVendors } from "../../../../redux/ApiCall";

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
  const { topVentors } = useAppSelector((state) => state.vendor);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopVendors());
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Title>Top vendors by customers feed backs</Title>
      <Content>
        {topVentors &&
          topVentors.map((vendor) => (
            <Vendor key={vendor._id} vendor={vendor} />
          ))}
      </Content>
    </Container>
  );
};

export default TopVendors;
