import { useAppSelector } from "../../../../redux/hook";
import FoodTemplate from "./FoodTemplate";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
`;

const MainCourses = () => {
  const { vendorById } = useAppSelector((state) => state.vendor);

  return (
    <Container>
      {vendorById &&
        vendorById?.foods.map((food) => (
          <FoodTemplate key={food._id} food={food} />
        ))}
    </Container>
  );
};

export default MainCourses;
