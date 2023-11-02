import styled from "styled-components";
import Echart from "echarts-for-react";
const Container = styled.div`
  flex: 1.5;
  height: 100%;
  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.15);
  display: flex;
  gap: 5px;
`;

const TopLabelWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const TopLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ColorForLabel = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 15px;
  background-color: ${(props) => props.color};
`;

const SeparateLine = styled.div`
  width: 0.5px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 0 2.5px rgba(0, 0, 0, 1);
`;
const EchartWrapper = styled.div`
  flex: 3;
`;
const FoodsStats = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };
  return (
    <Container>
      <TopLabelWrapper>
        <TopLabel>
          <ColorForLabel color="#e7a646" />
          Food_1
        </TopLabel>
      </TopLabelWrapper>
      <SeparateLine />
      <EchartWrapper>
        <Echart option={option} style={{ width: "100%" }} />
      </EchartWrapper>
    </Container>
  );
};

export default FoodsStats;
