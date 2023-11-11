import styled from "styled-components";
import restaurant_1 from "../../../../assets/restaurant/restaurant_1.jpeg";
import Menu from "./Menu";
import { useAppSelector } from "../../../../redux/hook";

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
  const { vendorById } = useAppSelector((state) => state.vendor);

  return (
    <Container>
      <Image
        src={vendorById?.coverImage ? vendorById?.coverImage : restaurant_1}
        alt="restaurant"
      />
      <Menu />
    </Container>
  );
};

export default Intro;
