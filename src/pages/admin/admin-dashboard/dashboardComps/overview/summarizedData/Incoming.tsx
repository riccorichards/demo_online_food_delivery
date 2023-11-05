import styled from "styled-components";
import DataTemplate from "./DataTemplate";

const Container = styled.div``;

const Incoming = () => {
  const fakeData = { amount: 5643, desc: "this is Incoming" };
  return (
    <Container>
      <DataTemplate data={fakeData} />
    </Container>
  );
};

export default Incoming;
