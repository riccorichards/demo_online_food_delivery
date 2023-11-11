import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hook";

const Container = styled.div`
  position: absolute;
  width: 80%;
  padding: 10px;
  display: flex;
  background-color: #fff;
  top: 110%;
  right: 0;
  border-radius: 15px;
  flex-direction: column;
`;

const SessionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: orangered;
`;

const FoodSession = styled.span`
  text-decoration: underline;
`;
const Food = styled.span`
  font-size: 12px;
`;

const MenuHandler = () => {
  const { vendorById } = useAppSelector((state) => state.vendor);

  return (
    <Container>
      <SessionsWrapper>
        <FoodSession>{vendorById?.foodType[0]}</FoodSession>
        <Food>Shrimp cocktail</Food>
        <Food>Calamari Fritti</Food>
        <Food>Crab cakes</Food>
      </SessionsWrapper>
      <SessionsWrapper>
        <FoodSession>{vendorById?.foodType[1]}</FoodSession>
        <Food>Shrimp cocktail</Food>
        <Food>Calamari Fritti</Food>
        <Food>Crab cakes</Food>
      </SessionsWrapper>
      <SessionsWrapper>
        <FoodSession>{vendorById?.foodType[2]}</FoodSession>
        <Food>Shrimp cocktail</Food>
        <Food>Calamari Fritti</Food>
        <Food>Crab cakes</Food>
      </SessionsWrapper>
    </Container>
  );
};

export default MenuHandler;
