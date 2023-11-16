import styled from "styled-components";
import NearFoodTemplate from "./NearFoodTemplate";
import pizza from "../../../../../assets/pizza-removebg-preview.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Pizza = () => {
  const fakeConet = {
    title: "Pizza",
    desc: "Italian",
    minPrice: "$12.55",
    imageUrl: pizza,
  };
  return (
    <Container>
      <NearFoodTemplate cat={fakeConet} />
    </Container>
  );
};

export default Pizza;
