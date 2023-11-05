import styled from "styled-components";
import DataTemplate from "./DataTemplate";

const Container = styled.div``;

const SellAmount = () => {
  const fakeData = { amount: 893, desc: "this is sell" };
  return (
    <Container>
      <DataTemplate data={fakeData} />
    </Container>
  );
};

export default SellAmount;
