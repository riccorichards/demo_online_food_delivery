import { FC } from "react";
import styled from "styled-components";

const Contaier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 0 1.5px 15px rgba(0, 0, 0, 0.35);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

interface FoodType {
  id: number;
  image: string;
  title: string;
  price: string;
  desc: string;
}
const Food: FC<{ food: FoodType }> = ({ food }) => {
  return (
    <Contaier>
      <ImageWrapper>
        <Image src={food.image} />
      </ImageWrapper>
      <InfoWrapper>
        <span>{food.title}</span>
        <span>{food.desc}</span>
        <span>{food.price}</span>
      </InfoWrapper>
    </Contaier>
  );
};

export default Food;
