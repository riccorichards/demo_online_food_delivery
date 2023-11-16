import styled from "styled-components";
import Lottie from "lottie-react";
import animatedData from "../../../assets/lottie.json";
import { useNavigate } from "react-router-dom";
import { laptopDevice, mobileDevice } from "../../../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
`;

const InformationalPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${mobileDevice({ marginBottom: "150px" })}
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Playpen Sans", "cursive";
`;

const OnlineStyle = styled.span`
  font-size: 80px;
  font-weight: 900;
  color: orange;
  text-shadow: 0 0 1.5px red;
  ${laptopDevice({ fontSize: "60px" })}
  ${mobileDevice({})}
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
  ${laptopDevice({ fontSize: "24px" })}
`;

const Desc = styled.p`
  color: #032f05;
  font-size: 18px;
  ${laptopDevice({ fontSize: "14px" })}
`;

const Button = styled.button`
  width: fit-content;
  background-color: #032f05;
  border: none;
  font-family: "Playpen Sans", "cursive";
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
  ${mobileDevice({ display: "none" })}
`;
const Intro = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/auth");
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
