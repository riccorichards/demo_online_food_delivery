import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 15px;
`;

const Info = styled.h1`
  position: absolute;
	bottom: 5%;
	color: aliceblue;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

interface StoryType {
  id: number;
  image: string;
  restaurant: string;
}
const Story: FC<{ el: StoryType }> = ({ el }) => {
  return (
    <Container key={el.id}>
      <Image src={el.image} />
      <Info>{el.restaurant}</Info>
    </Container>
  );
};

export default Story;
