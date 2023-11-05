import styled from "styled-components";
import OverviewHeader from "./OverviewHeader";
import SummarizedData from "./summarizedData/SummarizedData";
import OverviewWithEchart from "./OverviewWithEchart";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const Overview = () => {
  return (
    <Container>
      <OverviewHeader />
      <SummarizedData />
      <OverviewWithEchart />
    </Container>
  );
};

export default Overview;
