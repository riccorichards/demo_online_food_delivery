import { FC } from "react";
import styled from "styled-components";

interface FoodType {
  id: number;
  img: string;
  title: string;
  price: string;
  desc: string;
}

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3.5px solid orangered;
`;
const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const TitlePlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const Title = styled.h3`
  margin: 0;
  color: orangered;
`;
const Decor = styled.span`
  border: dashed 1px;
  width: 100%;
`;
const Price = styled.span`
  font-size: 24px;
`;

const Desc = styled.p`
  font-size: 18px;
`;
const FoodTemplate: FC<{ food: FoodType }> = ({ food }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={food.img} />
      </ImageWrapper>
      <Details>
        <TitlePlace>
          <Title>{food.title}</Title>
          <Decor />
          <Price>{food.price}</Price>
        </TitlePlace>
        <Desc>{food.desc}</Desc>
      </Details>
    </Container>
  );
};

export default FoodTemplate;
