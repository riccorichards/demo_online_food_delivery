import styled from "styled-components";
import DataTemplate from "./DataTemplate";

const Container = styled.div``;

const UsersAmount = () => {
  const fakeData = { amount: 1563, desc: "this is UsersAmount" };
  return (
    <Container>
      <DataTemplate data={fakeData} />
    </Container>
  );
};

export default UsersAmount;
