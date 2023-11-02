import styled from "styled-components";
import OrderVolumes from "./../VolumesAndFoods/OrderVolumes";
import FoodsStats from "./FoodsStats";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const VolumesAndFoods = () => {
  return (
    <Container>
      <OrderVolumes />
      <FoodsStats />
    </Container>
  );
};

export default VolumesAndFoods;
