import { useAppSelector } from "../../../../redux/hook";
import FoodTemplate from "./FoodTemplate";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const MainCourses = () => {
  const { foods } = useAppSelector((state) => state.food);

  return (
    <Container>
      {foods &&
        foods.map((food) => <FoodTemplate key={food._id} food={food} />)}
    </Container>
  );
};

export default MainCourses;
