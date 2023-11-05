import styled from "styled-components";
import restaurant_1 from "../../../../assets/restaurant/restaurant_1.jpeg";
import Menu from "./Menu";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  border-radius: 15px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const Intro = () => {
  return (
    <Container>
      <Image src={restaurant_1} alt="restaurant" />
      <Menu />
    </Container>
  );
};

export default Intro;
