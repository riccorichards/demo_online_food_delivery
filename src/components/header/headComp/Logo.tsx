import { FC } from "react";
import styled from "styled-components";
import { CiDeliveryTruck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: fit-content;
  color: #032f05;
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
`;

const IconStype = styled.div`
  font-size: 32px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.5px;
`;
const Logo: FC = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <LogoStyle onClick={() => goToHome()}>
      <IconStype>
        <CiDeliveryTruck />
      </IconStype>
      Delivery
    </LogoStyle>
  );
};

export default Logo;
