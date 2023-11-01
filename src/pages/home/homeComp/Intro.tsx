import styled from "styled-components";
import Lottie from "lottie-react";
import animatedData from "../../../assets/lottie.json";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
`;

const InformationalPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const OnlineStyle = styled.span`
  font-size: 80px;
  font-weight: 900;
  color: orange;
  text-shadow: 0 0 1.5px red;
`;

const FoodDeveliry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #032f05;
`;

const TitleItems = styled.span`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.5px;
`;

const Desc = styled.p`
  color: #032f05;
  font-size: 18px;
`;

const Button = styled.button`
  width: fit-content;
  background-color: #032f05;
  border: none;
  font-family: "Roboto Condensed", sans-serif;
  padding: 15px 24px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
const LottieContainer = styled.div`
  flex: 1;
`;
const Intro = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <InformationalPart>
        <TitleContainer>
          <OnlineStyle>Online</OnlineStyle>
          <FoodDeveliry>
            <TitleItems>Food</TitleItems>
            <TitleItems>Delivery</TitleItems>
          </FoodDeveliry>
        </TitleContainer>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quia
          odit minima dicta earum, sunt unde sed distinctio! Delectus, incidunt
          temporibus veniam dolorem voluptas ratione.
        </Desc>
        <Button onClick={() => goToLogin()}>Order Now</Button>
      </InformationalPart>
      <LottieContainer>
        <Lottie animationData={animatedData} />
      </LottieContainer>
    </Container>
  );
};

export default Intro;
