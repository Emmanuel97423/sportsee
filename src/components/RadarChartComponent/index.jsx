/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  // PolarRadiusAxis,
  Radar,
  ResponsiveContainer
} from 'recharts';

/**
 * A component that renders a radar chart of a user's performances.
 * @param {Object} props - The component's props.
 * @param {Array} props.performances - Array of performances data.
 * @param {string|number} props.userId - The user ID of the user whose performances to display.
 */
export default function RadarChartComponent({ performances, userId }) {
  const [data, setData] = useState([]);
  // const filteredPerformance = filterUserPerformances(performances, userId);
  useEffect(() => {
    if (performances.length > 0) {
      const formatData = performances[0].dataItem.map((d) => {
        return {
          subject: performances[0]._kind[d.kind],
          A: d.value
        };
      });

      setData([...data, formatData]);
    }
  }, []);

  // const performance = new Performance(performances);

  const Container = styled.div`
    background: #282d30;
    height: 263px;
    /* width: 30%; */
    /* display: flex;
    justify-content: center;
    align-items: center;
    */
    border-radius: 5px;
    padding: 20px;
  `;

  return (
    // <ResponsiveContainer>
    <Container>
      <RadarChart outerRadius={60} width={275} height={275} data={data[0]}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" />
        {/* <PolarRadiusAxis angle={30} domain={[0, 240]} /> */}
        <Radar name={userId} dataKey="A" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </Container>
    // </ResponsiveContainer>
  );
}

RadarChartComponent.propTypes = {
  performances: PropTypes.array,
  userId: PropTypes.number
};
