/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
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
import Performance from '../../models/performances/Performance';

/**
 * Filters user performances by a given user ID.
 * @param {Array} userDataPerformances - Array of user performances.
 * @param {string|number} id - The user ID to filter by.
 * @returns {Array} - Array of filtered user performances.
 */
function filterUserPerformances(userDataPerformances, id) {
  return userDataPerformances.filter(
    (performance) => performance.userId === id
  );
}

/**
 * A component that renders a radar chart of a user's performances.
 * @param {Object} props - The component's props.
 * @param {Array} props.performances - Array of performances data.
 * @param {string|number} props.userId - The user ID of the user whose performances to display.
 */
export default function RadarChartComponent({ performances, userId }) {
  const filteredPerformance = filterUserPerformances(performances, userId);

  const performance = new Performance(filteredPerformance[0]);
  const formatData = performance.dataItem.map((d) => {
    return {
      subject: performance._kind[d.kind],
      A: d.value
    };
  });

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
      <RadarChart outerRadius={60} width={275} height={275} data={formatData}>
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
