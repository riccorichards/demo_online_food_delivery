import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

const Title = styled.h3``;

const TimeFrameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TimeFrame = styled.button`
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const SeparateLine = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: rgba(118, 112, 112, 0.35);
  margin: 0 auto;
`;
const OverviewHeader = () => {
  return (
    <>
      <Container>
        <Title>Overview</Title>
        <TimeFrameWrapper>
          <TimeFrame>ALL</TimeFrame>
          <TimeFrame>1M</TimeFrame>
          <TimeFrame>6M</TimeFrame>
          <TimeFrame>1Y</TimeFrame>
        </TimeFrameWrapper>
      </Container>
      <SeparateLine />
    </>
  );
};

export default OverviewHeader;
