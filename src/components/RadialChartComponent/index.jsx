/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend
} from 'recharts';

function CustomLabel({ value }) {
  console.log('value:', value);
  const Text = styled.div`
    background-color: green;
    color: black;
  `;
  return (
    <div>
      <Text>Hello {value}</Text>
    </div>
  );
}

export default function RadialChartComponent({ data }) {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Container>
      <RadialBarChart
        width={260}
        height={260}
        innerRadius="100%"
        outerRadius="50%"
        data={data}
        startAngle={540}
        endAngle={180}
        barSize={10}
      >
        <RadialBar
          minAngle={15}
          // label={{ fill: '#000', position: 'center' }}
          label={<CustomLabel />}
          clockWise={true}
          dataKey="todayScore"
          fill="#FF0000"
          background
        />

        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          angleAxisId={0}
          tick={false}
        />

        {/* <Text textAnchor="middle">Hello</Text> */}
        {/* <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        align="right"
      /> */}
      </RadialBarChart>
    </Container>
  );
}
