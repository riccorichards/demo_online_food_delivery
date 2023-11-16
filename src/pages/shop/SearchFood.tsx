import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import React, { useContext, useState } from "react";
import CatContext from "../../context";
import { FilterByType, GetFoodsType } from "../../redux/ApiCall";
import { useAppSelector } from "../../redux/hook";
import SearchedResult from "./SearchedResult";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  border-radius: 15px;
  height: 5vh;
  box-shadow: 0 0 1.5px rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  position: relative;
`;

const IconWrapper = styled.div`
  background-color: orangered;
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0 0 15px;
`;

const Input = styled.input`
  width: 95%;
  height: 5vh;
  border: none;
  background-color: transparent;
  padding-left: 10px;
  font-family: "Playpen Sans", "cursive";

  &:focus {
    outline: none;
  }
`;

const ResetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Playpen Sans", "cursive";
  height: 100%;
  border: none;
  background-color: orangered;
  border-radius: 5px;
  color: #032f05;
  letter-spacing: 1px;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;
const SearchFood = () => {
  const { foods } = useAppSelector((state) => state.food);
  const getContext = useContext(CatContext);
  const [inputValue, setInputValue] = useState("");
  const [focusedInput, setFocusedInput] = useState(false);

  if (getContext === null) return null;

  const { reset } = getContext.filterBy;
  const setFilterBy = getContext.setFilterBy;

  const resetButton = () => {
    setFilterBy((prev: FilterByType) => {
      return {
        reset: !prev.reset,
        vendor: "",
        duration: "",
        cuisines: "",
      };
    });
  };

  const handerInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  if (!foods) return null;

  const filteredFoods =
    foods && inputValue
      ? foods.filter((food: GetFoodsType) =>
          food.name.toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];

  const handleOnfocus = () => {
    setFocusedInput(true);
  };

  const handleOnBlur = () => {
    setFocusedInput(false);
  };

  return (
    <Container>
      <ResetButton disabled={reset} onClick={resetButton}>
        Reset
      </ResetButton>
      <InputWrapper>
        <IconWrapper>
          <BiSearchAlt2 />
        </IconWrapper>
        <Input
          onFocus={handleOnfocus}
          onBlur={handleOnBlur}
          placeholder="Seach Food..."
          onChange={handerInputValue}
          value={inputValue}
        />
        {focusedInput && (
          <span
            style={{
              opacity: focusedInput ? "1" : "0",
              transition: "opacity 0.5s ease-in-out",
              display: "block",
              pointerEvents: focusedInput ? "auto" : "none",
              visibility: focusedInput ? "visible" : "hidden",
            }}
          >
            <SearchedResult foods={filteredFoods} />
          </span>
        )}
      </InputWrapper>
    </Container>
  );
};

export default SearchFood;
