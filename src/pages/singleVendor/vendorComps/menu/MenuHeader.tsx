import { FC } from "react";
import styled from "styled-components";

const MenuHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const DecorLine = styled.div`
  width: 1.5px;
  height: 100px;
  background-color: orangered;
`;

const MenuHeader = styled.span`
  font-size: 85px;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0 0 1.5px black;
`;

const MenuHeaderTemplate: FC<{ title: string }> = ({ title }) => {
  return (
    <MenuHeaderWrapper>
      <DecorLine />
      <MenuHeader>{title}</MenuHeader>
    </MenuHeaderWrapper>
  );
};

export default MenuHeaderTemplate;
