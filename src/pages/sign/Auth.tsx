import styled from "styled-components";
import bg from "../../assets/auth_bg.jpg";
import { GiCardExchange } from "react-icons/gi";
import { GrUserAdmin, GrRestaurant, GrUserExpert } from "react-icons/gr";
import { ImEnter } from "react-icons/im";
import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthWrapper = styled.div`
  width: 400px;
  height: 500px;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

const Controllers = styled.div`
  height: 100%;
  flex: 1;
  border-radius: 15px 0px 0 15px;
  box-shadow: inset 0 0 1.5px orangered;
  display: flex;
  flex-direction: column;
`;

const SeparateLine = styled.div`
  width: 80%;
  height: 0.5px;
  box-shadow: 0 0 1.5px orangered;
  margin: 0 auto;
`;

const Controller = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
const SwitcherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
`;
const Switcher = styled.div`
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
const FormWrapper = styled.div`
  flex: 4;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  border-radius: 0 15px 15px 0;
`;

const FormTitle = styled.h1`
  color: aliceblue;
  text-align: center;
  text-shadow: 0 0 1.5px orangered;
`;

const Demo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Auth = () => {
  const [authSwitcher, setAuthSwitcher] = useState(false);
  const [whoIs, setWhoIs] = useState("customer");

  return (
    <Container>
      <AuthWrapper>
        <Controllers>
          <Controller>
            <IconWrapper onClick={() => setAuthSwitcher((prev) => !prev)}>
              <GiCardExchange />
            </IconWrapper>
          </Controller>
          <SeparateLine />
          <Controller>
            <IconWrapper>
              <ImEnter />
            </IconWrapper>
          </Controller>
          <SeparateLine />
          <Controller>
            <SwitcherWrapper>
              <Switcher>
                <GrUserAdmin onClick={() => setWhoIs("admin")} />
              </Switcher>
              <Switcher>
                <GrRestaurant onClick={() => setWhoIs("vendor")} />
              </Switcher>
              <Switcher>
                <GrUserExpert onClick={() => setWhoIs("customer")} />
              </Switcher>
            </SwitcherWrapper>
          </Controller>
        </Controllers>
        <FormWrapper>
          <Image src={bg} />
          <Demo>
            <span>Email: smith@example.com</span>
            <span>Password: 123456789</span>
            <span></span>
          </Demo>
          <FormTitle>
            {authSwitcher
              ? `Login As ${whoIs === "admin" ? "an" : "a"} ${whoIs}`
              : "Sign Up"}
          </FormTitle>
          {authSwitcher ? <Login whoIs={whoIs} /> : <SignUp />}
        </FormWrapper>
      </AuthWrapper>
    </Container>
  );
};

export default Auth;
