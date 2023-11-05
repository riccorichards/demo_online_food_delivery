import food_1 from "../../../../assets/food_1.jpeg";
import food_3 from "../../../../assets/food_3.jpeg";
import food_2 from "../../../../assets/food_2.jpeg";
import food_4 from "../../../../assets/food_4.jpeg";
import food_5 from "../../../../assets/food_5.jpeg";
import food_6 from "../../../../assets/food_6.jpeg";
import food_7 from "../../../../assets/food_7.jpeg";
import FoodTemplate from "./FoodTemplate";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const SideDishes = () => {
  const fakeData = [
    {
      id: 7,
      title: "food_7",
      desc: "this is a food_7",
      img: food_7,
      price: "$23",
    },
    {
      id: 6,
      title: "food_6",
      desc: "this is a food_6",
      img: food_6,
      price: "$23",
    },
    {
      id: 5,
      title: "food_5",
      desc: "this is a food_5",
      img: food_5,
      price: "$23",
    },
    {
      id: 4,
      title: "food_4",
      desc: "this is a food_4",
      img: food_4,
      price: "$23",
    },
    {
      id: 3,
      title: "food_3",
      desc: "this is a food_3",
      img: food_3,
      price: "$23",
    },
    {
      id: 2,
      title: "food_2",
      desc: "this is a food_2",
      img: food_2,
      price: "$23",
    },
    {
      id: 1,
      title: "food_1",
      desc: "this is a food_1",
      img: food_1,
      price: "$23",
    },
  ];
  return (
    <Container>
      {fakeData.map((food) => (
        <FoodTemplate key={food.id} food={food} />
      ))}
    </Container>
  );
};

export default SideDishes;
