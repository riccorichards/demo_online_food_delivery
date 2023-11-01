import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
const Container = styled.div`
  width: 100%;
  border-radius: 15px;
  height: 5vh;
  /*border: 1px solid;*/
  box-shadow: 0 0 1.5px rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
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
  height: 80%;
  border: none;
  background-color: transparent;
  padding-left: 10px;
  font-family: "Roboto Condensed", sans-serif;

  &:focus {
    outline: none;
  }
`;

const SearchFood = () => {
  return (
    <Container>
      <IconWrapper>
        <BiSearchAlt2 />
      </IconWrapper>
      <Input placeholder="If you want to search by category you should use '@', like => @chiness food" />
    </Container>
  );
};

export default SearchFood;
