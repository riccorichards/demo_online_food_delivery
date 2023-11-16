import styled from "styled-components";
import { GetFoodsType } from "../../redux/ApiCall";

const Container = styled.div`
  position: absolute;
  width: calc(100% - 30px);
  max-height: 50vh;
  overflow-y: auto;
  top: 105%;
  left: 0;
  padding: 15px;
  border-radius: 15px 5px 5px 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #fff;
`;

const FoodWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
  &:hover {
    transition: all 0.2s ease-in;
    background-color: rgb(220, 222, 224);
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid red;
`;

const Title = styled.h4`
  margin: 0;
`;

const SearchedResult: React.FC<{ foods: GetFoodsType[] }> = ({ foods }) => {
  return (
    <Container>
      {foods.map((food) => (
        <FoodWrapper>
          <Image src={food.images} alt="food_Image" />
          <Title>{food.name}</Title>
          <p>{`$ ${food.price}`}</p>
        </FoodWrapper>
      ))}
    </Container>
  );
};

export default SearchedResult;
