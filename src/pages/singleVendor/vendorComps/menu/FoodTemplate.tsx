import { FC } from "react";
import styled from "styled-components";
import { GetFoodsType } from "../../../../redux/ApiCall";
import { mobileDevice } from "../../../../responsive";
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
  position: relative;
  ${mobileDevice({ width: "80px", height: "80px" })}
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
  gap: 5px;
`;

const Title = styled.h4`
  margin: 0;
  color: orangered;
  width: 250px;
  ${mobileDevice({ width: "300px", fontSize: "12px" })}
`;
const Decor = styled.span`
  border: dashed 1px;
  width: 100%;
`;
const Price = styled.span`
  font-size: 24px;
  ${mobileDevice({ fontSize: "14px" })}
`;

const Desc = styled.p`
  font-size: 11px;
`;

const FoodTemplate: FC<{ food: GetFoodsType }> = ({ food }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={food.images} />
      </ImageWrapper>
      <Details>
        <TitlePlace>
          <Title>{food.name}</Title>
          <Decor />
          <Price>{food.price}</Price>
        </TitlePlace>
        <Desc>{food.description}</Desc>
      </Details>
    </Container>
  );
};

export default FoodTemplate;
