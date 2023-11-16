import FoodTemplate from "./FoodTemplate";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hook";
import { laptopDevice } from "../../../../responsive";

const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  ${laptopDevice({
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

const SideDishes = () => {
  const { foods } = useAppSelector((state) => state.food);

  return (
    <Container>
      {foods &&
        foods.map((food) => <FoodTemplate key={food._id} food={food} />)}
    </Container>
  );
};

export default SideDishes;
