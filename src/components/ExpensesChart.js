import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const ExpensesChart = () => {
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "#FFB6BB",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0,
    fillShadowGradient: "#FFB6BB",
    fillShadowGradientOpacity: 0.15,
    color: () => `rgba(244, 96, 105, 0.4)`,
    strokeWidth: 3,
    barPercentage: 0.5,
    useShadowColorFromDataset: true,
    propsForDots: {
      r: "6",
      strokeWidth: "3",
      stroke: "#F46069",
      fill: "#fff",
    },
    propsForHorizontalLabels: {
      fill: "#1D3041",
    },
    propsForVerticalLabels: {
      fill: "#1D3041",
    },
  };
  const data = {
    labels: ["01", "02", "03", "04", "05", "06", "07"],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  };
  return (
    <LineChart
      data={data}
      chartConfig={chartConfig}
      width={screenWidth}
      height={220}
      yAxisLabel="$"
      yAxisInterval={1}
      bezier
      withHorizontalLines={true}
      withVerticalLines={false}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default ExpensesChart;
