import styled from "styled-components";
import Intro from "./Intro";
import PopularFoods from "./PopularFoods";
import Category from "./category/Category";
import Foods from "./foods/Foods";
import SearchFood from "./SearchFood";

const Container = styled.div`
  margin-top: 35px;
  display: flex;
  height: 5000px;
  gap: 15px;
`;

const Categories = styled.div`
  flex: 1;
`;

const Contents = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 25px;
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
        <Contents>
          <SearchFood />
          <Foods />
        </Contents>
      </Container>
    </>
  );
};

export default Shop;
