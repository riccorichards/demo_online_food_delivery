import styled from "styled-components";
import Intro from "./homeComp/Intro";
import Features from "./homeComp/features/Features";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
  padding: 100px 0;
`;

const Home = () => {
  return (
    <Container>
      <Intro />
      <Features />
    </Container>
  );
};

export default Home;
