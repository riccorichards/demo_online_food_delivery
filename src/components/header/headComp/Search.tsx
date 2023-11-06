import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import ProfileImage from "../userProfile/ProfileImage";
import ProfilePanel from "../userProfile/ProfilePanel";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  padding: 0 5px;
  border-radius: 15px;
  height: 4vh;
  box-shadow: 0 0 20.5px rgba(0, 0, 0, 0.45);
  position: relative;
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
const ProfileWrapper = styled.div`
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
  const { auth } = useAppSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/auth");
  };

  useEffect(() => {
    if (!auth) {
      setIsOpen(false);
    }
  }, [auth]);

  return (
    <Container>
      <SearchStyle placeholder="Search" />
      <SeparateLine />
      {auth?.status ? (
        <ProfileWrapper onClick={() => setIsOpen((prev) => !prev)}>
          <ProfileImage />
        </ProfileWrapper>
      ) : (
        <LoginStyle>
          <BiLogInCircle onClick={() => goToLogin()} />
        </LoginStyle>
      )}
      {isOpen && auth ? <ProfilePanel /> : null}
    </Container>
  );
};

export default Search;
