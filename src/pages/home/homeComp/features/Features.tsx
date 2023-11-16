import styled from "styled-components";
import Pizza from "./components/Pizza";
import Chicken from "./components/Chicken";
import SeaFood from "./components/SeaFood";
import FreshFood from "./components/FreshFood";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const HeaderTitle = styled.h1`
  text-align: center;
	font-size: 45px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const Features = () => {
  return (
    <Container>
      <HeaderTitle>Food Near Me</HeaderTitle>
      <Content>
        <Pizza />
        <Chicken />
        <SeaFood />
        <FreshFood />
      </Content>
    </Container>
  );
};

export default Features;
