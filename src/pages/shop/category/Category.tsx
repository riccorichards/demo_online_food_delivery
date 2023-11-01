import styled from "styled-components";
import Vendors from "./Vendors";
import Cuisines from "./Cuisines";
import NearMe from "./NearMe";
import Food from "./Food";
import Price from "./Price";

const Container = styled.div`
  border-radius: 15px;
  background-color: #fff;
`;

const Category = () => {
  return (
    <Container>
      <Price />
      <Vendors />
      <Cuisines />
      <NearMe />
      <Food />
    </Container>
  );
};

export default Category;
