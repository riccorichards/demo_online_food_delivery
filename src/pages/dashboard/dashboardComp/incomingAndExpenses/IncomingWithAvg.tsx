import styled from "styled-components";
import Echart from "echarts-for-react";
const Container = styled.div`
  flex: 2.5;
  height: 100%;
  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 10.5px rgba(0, 0, 0, 0.15);
`;

const IncomingWithAvg = () => {
  const option = {
    title: {
      text: "Incoming & Expenses",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        dataView: { readOnly: false },
        magicType: { type: ["line", "bar"] },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} $",
      },
    },
    series: [
      {
        name: "Highest",
        type: "line",
        data: [15235, 12352, 13156, 14516, 11123, 17564, 20213],
        itemStyle: {
          color: "#07f762",
        },
        markPoint: {
          data: [
            { type: "max", name: "Max" },
            { type: "min", name: "Min" },
          ],
        },
        markLine: {
          data: [{ type: "average", name: "Avg" }],
        },
      },
      {
        name: "Lowest",
        type: "line",
        data: [10505, 8654, 5165, 7546, 10125, 9563, 9865],
        itemStyle: {
          color: "#d93502",
        },
        markLine: {
          data: [
            { type: "average", name: "Avg" },
            [
              {
                symbol: "none",
                x: "90%",
                yAxis: "max",
              },
              {
                symbol: "circle",
                label: {
                  position: "start",
                  formatter: "Max",
                },
                type: "max",
                name: "最高点",
              },
            ],
          ],
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

export default IncomingWithAvg;
