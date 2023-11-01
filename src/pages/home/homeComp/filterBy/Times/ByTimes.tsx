import styled from "styled-components";
import { SeparateLine } from "../../../../../components/header/headComp/Search";
import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";
import { useState } from "react";
import CuisinesItems from "./TimesItems";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #032f05;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
`;
const ListWrapper = styled.div`
  border: 1px solid;
  width: 120px;
  height: 5vh;
  border-radius: 15px;
  display: flex;
  align-items: center;
  position: relative;
`;

const ItemTitle = styled.span`
  flex: 3;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
`;

const IconStyle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const ByTimes = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedItem, setSelectedItem] = useState("30 min");

  return (
    <Container>
      <Title>Times</Title>
      <ListWrapper>
        <ItemTitle>{selectedItem}</ItemTitle>
        <SeparateLine />
        <IconStyle onClick={() => setOpenFilter((prev) => !prev)}>
          {openFilter ? <HiArrowCircleUp /> : <HiArrowCircleDown />}
        </IconStyle>
        <CuisinesItems
          openFilter={openFilter}
          setSelectedItem={setSelectedItem}
        />
      </ListWrapper>
    </Container>
  );
};

export default ByTimes;
