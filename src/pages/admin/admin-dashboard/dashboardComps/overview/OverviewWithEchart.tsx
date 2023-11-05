import Echart from "echarts-for-react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 15px;
`;

const OverviewWithEchart = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      data: ["Foods", "Seles", "Revenue"],
    },
    xAxis: [
      {
        type: "category",
        data: [
          "jan",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec",
        ],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Foods",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value} $",
        },
      },
      {
        type: "value",
        name: "Seles",
        min: 0,
        max: 450,
        interval: 50,
        axisLabel: {
          formatter: "{value} $",
        },
      },
    ],
    series: [
      {
        name: "Foods",
        type: "bar",

        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
      },
      {
        name: "Seles",
        type: "bar",

        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        name: "Revenue",
        type: "line",
        yAxisIndex: 1,
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
      },
    ],
  };
  return (
    <Container>
      <Echart
        option={option}
        style={{
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          position: "absolute",
        }}
      />
    </Container>
  );
};

export default OverviewWithEchart;
