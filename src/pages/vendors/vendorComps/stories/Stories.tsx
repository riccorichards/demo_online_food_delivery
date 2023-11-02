import styled from "styled-components";
import Story from "./Story";
import food_1 from "../../../../assets/food_1.jpeg";
import food_2 from "../../../../assets/food_2.jpeg";
import food_3 from "../../../../assets/food_3.jpeg";
import food_4 from "../../../../assets/food_4.jpeg";
import food_5 from "../../../../assets/food_5.jpeg";
import food_6 from "../../../../assets/food_6.jpeg";
import food_7 from "../../../../assets/food_7.jpeg";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 800;
  color: orangered;
`;

const Galleries = styled.div`
  display: flex;
  gap: 15px;
  position: relative;
`;

const Forward = styled(IoIosArrowForward)`
  font-size: 85px;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  right: -2%;
  cursor: pointer;
`;
const Back = styled(IoIosArrowBack)`
  font-size: 85px;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 5%;
  cursor: pointer;
`;

const Stories = () => {
  const fakeGallery = [
    { id: 1, image: food_1, restaurant: "rest_1" },
    { id: 2, image: food_2, restaurant: "rest_2" },
    { id: 3, image: food_3, restaurant: "rest_3" },
    { id: 4, image: food_4, restaurant: "rest_4" },
    { id: 5, image: food_5, restaurant: "rest_5" },
    { id: 6, image: food_6, restaurant: "rest_6" },
    { id: 7, image: food_7, restaurant: "rest_7" },
    { id: 1, image: food_1, restaurant: "rest_1" },
  ];
  const fakeGallery2 = [
    { id: 1, image: food_1, restaurant: "rest_1" },
    { id: 2, image: food_2, restaurant: "rest_2" },
    { id: 3, image: food_3, restaurant: "rest_3" },
    { id: 4, image: food_4, restaurant: "rest_4" },
    { id: 5, image: food_5, restaurant: "rest_5" },
  ];

  const [fetch, setFetch] = useState(1);
  return (
    <Container>
      <Title>Stories</Title>
      <Galleries>
        <Back onClick={() => setFetch(1)} />
        {fetch === 1 && fakeGallery.map((el) => <Story el={el} />)}
        {fetch === 0 && fakeGallery2.map((el) => <Story el={el} />)}
        <Forward onClick={() => setFetch(0)} />
      </Galleries>
    </Container>
  );
};

export default Stories;
