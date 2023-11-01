import styled from "styled-components";
import food_1 from "../../assets/food_1.jpeg";
import food_2 from "../../assets/food_2.jpeg";
import food_3 from "../../assets/food_3.jpeg";
import food_4 from "../../assets/food_4.jpeg";
import food_5 from "../../assets/food_5.jpeg";
import food_6 from "../../assets/food_6.jpeg";
import food_7 from "../../assets/food_7.jpeg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h1``;

const Foods = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  padding: 15px 0;
  border-radius: 15px;
`;

const Food = styled.div`
  width: 80px;
  height: 80px;
  border: 5px solid orangered;
  border-radius: 50%;
  box-shadow: 0 1.5px 15px rgba(0, 0, 0, 0.35);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
const PopularFoods = () => {
  return (
    <Container>
      <Title>Popular Foods</Title>
      <Foods>
        <Food>
          <Image src={food_1} />
        </Food>
        <Food>
          <Image src={food_2} />
        </Food>
        <Food>
          <Image src={food_3} />
        </Food>
        <Food>
          <Image src={food_4} />
        </Food>
        <Food>
          <Image src={food_5} />
        </Food>
        <Food>
          <Image src={food_6} />
        </Food>
        <Food>
          <Image src={food_7} />
        </Food>
      </Foods>
    </Container>
  );
};

export default PopularFoods;
