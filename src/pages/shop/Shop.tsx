import styled from "styled-components";
import Intro from "./Intro";
import PopularFoods from "./PopularFoods";
import Category from "./category/Category";
import Foods from "./foods/Foods";
import SearchFood from "./SearchFood";
import CatContext from "../../context";
import { useEffect, useState } from "react";
import { FilterByType, getCart } from "../../redux/ApiCall";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

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

const initialFilterBy: FilterByType = {
  reset: false,
  vendor: "",
  cuisines: "",
  duration: "",
};

const Shop = () => {
  const [filterBy, setFilterBy] = useState(initialFilterBy);
  const values = { filterBy, setFilterBy };
  const { auth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      if (auth?.signature) dispatch(getCart(auth?.signature));
    } catch (error: any) {
      console.log({ err: error.message });
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CatContext.Provider value={values}>
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
    </CatContext.Provider>
  );
};

export default Shop;
