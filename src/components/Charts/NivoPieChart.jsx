import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const NivoPieChart = () => {
  // Example data for the pie chart
  const data = [
    { id: 'JavaScript', label: 'JavaScript', value: 35, color: 'hsl(180, 70%, 50%)' },
    { id: 'Python', label: 'Python', value: 20, color: 'hsl(100, 70%, 50%)' },
    { id: 'Java', label: 'Java', value: 15, color: 'hsl(30, 70%, 50%)' },
    { id: 'C++', label: 'C++', value: 10, color: 'hsl(360, 70%, 50%)' },
    { id: 'Ruby', label: 'Ruby', value: 5, color: 'hsl(60, 70%, 50%)' },
    { id: 'Others', label: 'Others', value: 15, color: 'hsl(240, 70%, 50%)' }
  ];

  return (
    <div style={{ height: 400 }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5} // Adjust the inner radius for the donut effect
        padAngle={0.7} // Adjust the padding between slices
        cornerRadius={3} // Round the corners of the slices
        activeOuterRadiusOffset={8}
        colors={d => d.data.color} // Use colors from the data
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10} // Skip labels for small slices
        arcLinkLabelsDiagonalLength={16}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLabelsSkipAngle={10}
        arcLabelsRadiusOffset={0.55}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemsSpacing: 0,
            symbolSize: 18,
            symbolShape: 'circle',
          },
        ]}
      />
    </div>
  );
};

export default NivoPieChart;
