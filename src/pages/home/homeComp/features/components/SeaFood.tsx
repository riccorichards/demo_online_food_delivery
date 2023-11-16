import styled from "styled-components";
import NearFoodTemplate from "./NearFoodTemplate";
import seaFood from "../../../../../assets/seafood.png";

const Container = styled.div``;

const SeaFood = () => {
  const fakeConet = {
    title: "Seafood",
    desc: "Sea food",
    minPrice: "$12.55",
    imageUrl: seaFood,
  };
  return (
    <Container>
      <NearFoodTemplate cat={fakeConet} />
    </Container>
  );
};

export default SeaFood;
