import styled from "styled-components";
import Intro from "./Intro";
import PopularFoods from "./PopularFoods";
import Category from "./category/Category";

const Container = styled.div`
  display: flex;
  height: 5000px;
`;

const Categories = styled.div`
  flex: 1;
`;

const Contents = styled.div`
  flex: 3;
`;

const Shop = () => {
  return (
    <>
      <Intro />
      <PopularFoods />
      <Container>
        <Categories>
          <Category />
        </Categories>
        <Contents></Contents>
      </Container>
    </>
  );
};

export default Shop;
