/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Customized,
  PolarRadiusAxis,
  Cell,
  Pie,
  Label,
  LabelList,
  ResponsiveContainer,
  Legend
} from 'recharts';

const ValueContent = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelConteneur = styled.div`
  /* position: absolute; */
  /* width: 260px; */
  /* height: 260px; */
  text-align: center;
`;

const Value = styled.p`
  /* position: absolute; */
  font-size: 26px;
  font-weight: 700;
  color: #282d30;
  margin: 0 0 10px 0;
`;
const Span = styled.span`
  /* position: absolute; */
  font-size: 16px;
  font-weight: 500;
  color: #74798c;
  line-height: 1.5;
`;

function customLabel({ value }) {
  return (
    <foreignObject x={48} y={48} width={164} height={164}>
      <ValueContent>
        <LabelConteneur>
          <Value>{value * 100}%</Value>
          <Span>
            de votre <br /> objectif
          </Span>
        </LabelConteneur>
      </ValueContent>
    </foreignObject>
  );
}

// const PieStyle = styled.div`
//   width: 160px;
//   height: 160px;
//   background-color: green;
// `;
// function CustomizedPie(props) {
//   return <PieStyle>hello</PieStyle>;
// }

export default function RadialChartComponent({ data }) {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fbfbfb;
  `;
  return (
    <Container>
      <RadialBarChart
        width={260}
        height={260}
        innerRadius="100%"
        outerRadius="70%"
        data={data}
        startAngle={540}
        endAngle={180}
        barSize={10}
      >
        <RadialBar
          minAngle={15}
          label={customLabel}
          clockWise={true}
          dataKey="todayScore"
          fill="#FF0000"
          cornerRadius={20}
        >
          {' '}
          {/* <Customized component={CustomizedPie} /> */}
        </RadialBar>

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
