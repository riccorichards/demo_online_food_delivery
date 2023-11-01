import styled from "styled-components";
import ByCuisines from "./Cuisines/ByCuisines";
import ByLocations from "./Locations/ByLocations";
import ByTimes from "./Times/ByTimes";

const Container = styled.div`
  height: 100vh;
  color: #032f05;
`;

const FilterItems = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: 700;
`;
const FilterBy = () => {
  return (
    <Container>
      <Title>Filter By</Title>
      <FilterItems>
        <ByCuisines />
        <ByLocations />
        <ByTimes />
      </FilterItems>
    </Container>
  );
};

export default FilterBy;
