import styled from "styled-components";
import Intro from "./homeComp/Intro";
import Features from "./homeComp/features/Features";
import MapClusters from "../../components/GoogleMapApi/MapClusters";

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
      <MapClusters />
    </Container>
  );
};

export default Home;
