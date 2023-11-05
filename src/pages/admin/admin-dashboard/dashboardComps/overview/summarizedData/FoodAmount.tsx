import styled from "styled-components";
import DataTemplate from "./DataTemplate";

const Container = styled.div``;

const FoodAmount = () => {
  const fakeData = { amount: 1563, desc: "this is somethink" };
  return (
    <Container>
      <DataTemplate data={fakeData} />
    </Container>
  );
};

export default FoodAmount;
