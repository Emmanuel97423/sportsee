/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RadialBarChart, RadialBar, PolarAngleAxis, Legend } from 'recharts';

/**
 * A styled component for the container radial chart
 */

const Container = styled.div`
  width: 258px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  border-radius: 5px;
  padding: 20px;
`;

/**
 * A styled component for the value content inside the chart
 */

const ValueContent = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * A styled component for the label container
 */

const LabelConteneur = styled.div`
  text-align: center;
`;

/**
 * A styled component for the value text
 */

const Value = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: #282d30;
  margin: 0 0 10px 0;
`;

/**
 * A styled component for the span text
 */

const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #74798c;
  line-height: 1.5;
`;

/**
 * A styled component for the Legend Chart component
 */

const LegendStyle = styled.div`
  position: absolute;
  padding: 5px 0 0 30px;
  font-weight: bold;
  font-size: 15px;
  color: #20253a; ;
`;

/**
 * A custom label component for the chart
 *
 * @function
 * @param {Object} param0 An object containing the value
 * @returns {JSX} Returns a React element
 */

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

/**
 * A custom Legend component for the chart
 *
 * @function
 * @param {Object}  containing the Legend
 * @returns {JSX} Returns a React element
 */

function CustomLegend() {
  return (
    <LegendStyle>
      <p>Score</p>
    </LegendStyle>
  );
}

/**
 * A Renders a radial chart component showing a user's score.
 *
 *@component
 * @param {Object} props Props passed to the component
 * @param {Array} props.data An array of data for the chart
 * @returns {JSX} Returns a React element
 */

export default function RadialChartComponent({ todayScore }) {
  return (
    <Container>
      <RadialBarChart
        width={260}
        height={260}
        innerRadius="100%"
        outerRadius="70%"
        data={todayScore}
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
        ></RadialBar>

        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          angleAxisId={0}
          tick={false}
        />
        <Legend verticalAlign="top" content={<CustomLegend />} />
      </RadialBarChart>
    </Container>
  );
}

RadialChartComponent.propTypes = {
  data: PropTypes.array
};
