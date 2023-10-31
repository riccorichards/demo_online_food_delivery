import { FC } from "react";
import styled from "styled-components";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  border: 1px solid;
  padding: 0 5px;
  border-radius: 15px;
  height: 4vh;
`;

const SearchStyle = styled.input`
  width: 50px;
  flex: 5;
  border: none;
  outline: none;
  &::placeholder {
    font-family: "Roboto Condensed", sans-serif;
    letter-spacing: 0.5px;
  }
`;

const SeparateLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #032f05;
`;

const LoginStyle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const Search: FC = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <Container>
      <SearchStyle placeholder="Search" />
      <SeparateLine />
      <LoginStyle>
        <BiLogInCircle onClick={() => goToLogin()} />
      </LoginStyle>
    </Container>
  );
};

export default Search;
