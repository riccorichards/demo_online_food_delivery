import { FC } from "react";
import styled from "styled-components";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  padding: 0 5px;
  border-radius: 15px;
  height: 4vh;
  box-shadow: 0 0 20.5px rgba(0, 0, 0, 0.45);
`;

const SearchStyle = styled.input`
  width: 50px;
  flex: 5;
  border: none;
  background-color: transparent;
  outline: none;
  font-family: "Playpen Sans", "cursive";

  &::placeholder {
    letter-spacing: 0.5px;
  }
`;

export const SeparateLine = styled.div`
  width: 2px;
  height: 70%;
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
    navigate("/auth");
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
