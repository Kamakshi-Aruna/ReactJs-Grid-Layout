import React from "react";
import { Funnel } from "@nivo/funnel";

const NivoFunnelChart = () => {
  const data = [
    {
      id: "Stage 1",
      value: 100,
      label: "Stage 1",
    },
    {
      id: "Stage 2",
      value: 80,
      label: "Stage 2",
    },
    {
      id: "Stage 3",
      value: 60,
      label: "Stage 3",
    },
    {
      id: "Stage 4",
      value: 40,
      label: "Stage 4",
    },
    {
      id: "Stage 5",
      value: 20,
      label: "Stage 5",
    },
  ];

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Funnel
        data={data}
        width={400}
        height={400}
        margin={{ top: 40, right: 60, bottom: 40, left: 60 }}
        label="label"
        value="value"
        colors={{ scheme: "nivo" }}
        borderColor={{ from: "color", modifiers: [["darker", 0.5]] }}
        labelPosition="inside"
        enableLabel={true}
        transitionDuration={400}
      />
    </div>
  );
};

export default NivoFunnelChart;
