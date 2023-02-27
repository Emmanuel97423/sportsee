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
  Radar,
  ResponsiveContainer,
  LabelList
} from 'recharts';

// Styled-component for container

const Container = styled.div`
  background: #282d30;
  height: 265px;
  width: 265px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
`;

/**
 *  * RadarChartComponent
 *
 * Renders a radar chart showing a user's performances.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {Array} props.performances - Array of performances data.
 * @param {string|number} props.userId - The user ID of the user whose performances to display.
 */

function CustomTick() {}
export default function RadarChartComponent({ performances, userId }) {
  const [data, setData] = useState([]);
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

  return (
    <Container>
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart outerRadius={85} data={data[0]}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" />
          <Radar name={userId} dataKey="A" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  );
}

RadarChartComponent.propTypes = {
  performances: PropTypes.array,
  userId: PropTypes.number
};
