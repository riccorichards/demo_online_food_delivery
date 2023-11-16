import styled from "styled-components";
import { FC } from "react";
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
  width: 235px;
  height: 100px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.35);
`;

const Details = styled.div`
  flex: 1;
`;

const ImageWrapper = styled.div`
  flex: 1;
  height: 150px;
  width: 150px;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  bottom: 25%;
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

type CategoryType = {
  title: string;
  desc: string;
  minPrice: string;
  imageUrl: string;
};

const NearFoodTemplate: FC<{ cat: CategoryType }> = ({ cat }) => {
  return (
    <Container>
      <Details>
        <h2>{cat.title}</h2>
        <p style={{ color: "grey" }}>{cat.desc}</p>
        <p> {cat.minPrice}</p>
      </Details>
      <ImageWrapper>
        <Image src={cat.imageUrl} />
      </ImageWrapper>
    </Container>
  );
};

export default NearFoodTemplate;
