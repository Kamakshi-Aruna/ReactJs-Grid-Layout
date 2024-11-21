import React from 'react';
import { ResponsiveBump } from '@nivo/bump';

const NivoBumpChart = () => {
  const data = [
    {
      "id": "A",
      "data": [
        { "x": 0, "y": 10 },
        { "x": 1, "y": 20 },
        { "x": 2, "y": 30 },
        { "x": 3, "y": 40 },
        { "x": 4, "y": 30 },
        { "x": 5, "y": 50 },
      ]
    },
    {
      "id": "B",
      "data": [
        { "x": 0, "y": 5 },
        { "x": 1, "y": 10 },
        { "x": 2, "y": 20 },
        { "x": 3, "y": 30 },
        { "x": 4, "y": 20 },
        { "x": 5, "y": 10 },
      ]
    },
    {
      "id": "C",
      "data": [
        { "x": 0, "y": 15 },
        { "x": 1, "y": 10 },
        { "x": 2, "y": 20 },
        { "x": 3, "y": 35 },
        { "x": 4, "y": 25 },
        { "x": 5, "y": 45 },
      ]
    },
  ];

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveBump
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        colors={{ scheme: 'nivo' }}
        lineWidth={3}
        activeLineWidth={6}
        activeOpacity={0.7}
        inactiveLineWidth={1}
        inactiveOpacity={0.15}
        enableGridX={true}
        enableGridY={true}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Time',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Value',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
      />
    </div>
  );
};

export default NivoBumpChart;
