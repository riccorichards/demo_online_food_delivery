import Food from "./Food";
import food_1 from "../../../assets/food_1.jpeg";
import food_3 from "../../../assets/food_3.jpeg";
import food_2 from "../../../assets/food_2.jpeg";
import food_4 from "../../../assets/food_4.jpeg";
import food_5 from "../../../assets/food_5.jpeg";
import food_6 from "../../../assets/food_6.jpeg";
import food_7 from "../../../assets/food_7.jpeg";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const Foods = () => {
  const fakeFoods = [
    {
      id: 1,
      image: food_1,
      title: "food_1",
      price: "25$",
      desc: "this is food_1",
    },
    {
      id: 2,
      image: food_2,
      title: "food_2",
      price: "25$",
      desc: "this is food_2",
    },
    {
      id: 3,
      image: food_3,
      title: "food_3",
      price: "25$",
      desc: "this is food_3",
    },
    {
      id: 4,
      image: food_4,
      title: "food_4",
      price: "25$",
      desc: "this is food_4",
    },
    {
      id: 5,
      image: food_5,
      title: "food_5",
      price: "25$",
      desc: "this is food_5",
    },
    {
      id: 6,
      image: food_6,
      title: "food_6",
      price: "25$",
      desc: "this is food_6",
    },
    {
      id: 7,
      image: food_7,
      title: "food_7",
      price: "25$",
      desc: "this is food_7",
    },
  ];
  return (
    <Container>
      {fakeFoods.map((food) => (
        <Food food={food} />
      ))}
    </Container>
  );
};

export default Foods;
