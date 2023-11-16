import styled from "styled-components";
import NearFoodTemplate from "./NearFoodTemplate";
import chicken from "../../../../../assets/chicken.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Chicken = () => {
  const fakeConet = {
    title: "Chiken",
    desc: "fry",
    minPrice: "$12.55",
    imageUrl: chicken,
  };
  return (
    <Container>
      <NearFoodTemplate cat={fakeConet} />
    </Container>
  );
};

export default Chicken;
