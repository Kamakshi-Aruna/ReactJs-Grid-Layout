import React from "react";
import { ResponsiveBar } from "@nivo/bar";

// Nivo Bar Chart Component
const NivoBarChart = () => {
  const data = [
    { country: "USA", burgers: 180, pizzas: 120 },
    { country: "UK", burgers: 150, pizzas: 140 },
    { country: "India", burgers: 220, pizzas: 180 },
    { country: "Japan", burgers: 80, pizzas: 60 },
    { country: "Germany", burgers: 100, pizzas: 90 },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={["burgers", "pizzas"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Count",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      role="application"
      ariaLabel="Nivo bar chart demo"
    />
  );
};

export default NivoBarChart;
