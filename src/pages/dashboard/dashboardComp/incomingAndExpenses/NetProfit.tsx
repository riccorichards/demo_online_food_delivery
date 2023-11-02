import styled from "styled-components";
import Echart from "echarts-for-react";
const Container = styled.div`
  flex: 1.5;
  height: 100%;
  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.15);
`;

const NetProfit = () => {
  const option = {
    title: {
      text: "Net Profit",
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
      },
      left: true,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "line",
        symbol: "triangle",
        symbolSize: 20,
        lineStyle: {
          color: "#5470C6",
          width: 4,
          type: "dashed",
        },
        itemStyle: {
          borderWidth: 3,
          borderColor: "#EE6666",
          color: "yellow",
        },
      },
    ],
  };
  return (
    <Container>
      <Echart option={option} style={{ width: "100%" }} />
    </Container>
  );
};

export default NetProfit;
