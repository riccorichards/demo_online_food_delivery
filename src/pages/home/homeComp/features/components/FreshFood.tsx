import styled from "styled-components";
import NearFoodTemplate from "./NearFoodTemplate";
import freFood from "../../../../../assets/freshfood.png";

const Container = styled.div``;

const FreshFood = () => {
  const fakeConet = {
    title: "Fresh",
    desc: "salads",
    minPrice: "$12.55",
    imageUrl: freFood,
  };
  return (
    <Container>
      <NearFoodTemplate cat={fakeConet} />
    </Container>
  );
};

export default FreshFood;
