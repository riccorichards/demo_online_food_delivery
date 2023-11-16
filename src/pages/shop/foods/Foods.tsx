import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getAllfoods, getFilteredfoods } from "../../../redux/ApiCall";
import Food from "./Food";
import CatContext from "../../../context";
import { mobileDevice } from "../../../responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  ${mobileDevice({
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

const Foods = () => {
  const dispatch = useAppDispatch();
  const { foods, filteredFoods } = useAppSelector((state) => state.food);

  const getContext = useContext(CatContext);

  const filterBy = getContext?.filterBy;

  let cuisines = filterBy?.cuisines;
  let duration = filterBy?.duration;
  let vendor = filterBy?.vendor;
  let reset = filterBy?.reset;

  useEffect(() => {
    if (cuisines === "" && duration === "" && vendor === "" && !reset) {
      dispatch(getAllfoods());
    } else {
      if (getContext) {
        const filterBy = getContext.filterBy;
        dispatch(getFilteredfoods(filterBy));
      }
    }
  }, [cuisines, duration, vendor, reset]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <DataWrapper>
        {filteredFoods ? (
          filteredFoods.length > 0 ? (
            filteredFoods.map((food) => <Food food={food} key={food._id} />)
          ) : (
            <div>No foods found for the selected filters.</div>
          )
        ) : (
          foods && foods.map((food) => <Food food={food} key={food._id} />)
        )}
      </DataWrapper>
    </Container>
  );
};
export default Foods;
