/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const DivTooltip = styled.div.attrs(() => ({ tabIndex: 0 }))`
  width: 40px;
  height: 65px;
  background-color: #e60000;
  text-align: center;
  & ul {
    height: 100%;
    color: #ffff;
    font-size: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    font-weight: 500;
  }
`;

/**
 * legendRenderColor - Renders the legend color based on the value.
 *
 * @function
 * @param {string} value - The value of the legend color.
 * @returns {JSX} The legend color component.
 */

function legendRenderColor(value) {
  let isCalories = false;
  if (value === 'calories') isCalories = true;

  return (
    <div>
      {isCalories ? (
        <p
          style={{
            color: ' #74798C',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '24px',
            letterSpacing: '0px',
            textAlign: 'left'
          }}
        >
          Calories brûlées (kCal)
        </p>
      ) : (
        <p
          style={{
            color: ' #74798C',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '24px',
            letterSpacing: '0px',
            textAlign: 'left'
          }}
        >
          Poids (kg)
        </p>
      )}
    </div>
  );
}

/**
 * renderCustomizedLegend - Renders a custom legend component.
 *
 * @function
 * @param {object} props - The legend properties.
 * @returns {JSX} The customized legend component.
 */

function renderCustomizedLegend(props) {
  const { payload } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
        marginBottom: '40px'
      }}
    >
      <p
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '700',
          fontSize: '15px'
        }}
      >
        Activité quotidienne
      </p>
      <ul style={{ display: 'flex', justifyContent: 'end', gap: '30px' }}>
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            style={{ color: entry.color, fontSize: '14px' }}
          >
            {legendRenderColor(entry.value)}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**

CustomTooltip - a custom tooltip component for a bar chart
@param {Object} props
@param {Boolean} props.active - indicates whether the tooltip is active or not
@param {Array} props.payload - array of data used to display in the tooltip
@param {String} props.label - label for the tooltip
@returns {JSX.Element} returns a custom tooltip component
*/

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <DivTooltip className="custom-tooltip">
        <ul>
          <p>{payload[0].value}Kg</p>
          <p>{payload[1].value}Kcal</p>
        </ul>
      </DivTooltip>
    );
  }

  return null;
}

function CustomizedYAxisTick({ x, y, payload }) {
  return (
    <g transform={`translate(${x + 70},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
        {payload.value}
      </text>
    </g>
  );
}

function CustomizedXAxisTick({ x, y, payload }) {
  return (
    <g transform={`translate(${x},${y + 20})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
        {payload.value + 1}
      </text>
    </g>
  );
}

/**

BarChartComponent - main component for generating a bar chart
@param {Object} props
@param {Array} props.userActivity - an array of user activity data used to generate the chart
@returns {JSX.Element} returns a bar chart component
*/

export default function BarChartComponent({ userActivity }) {
  const kilogramValues = userActivity
    .reduce((acc, val) => acc.concat(val), []) // Flattens the nested array
    .map((obj) => obj.kilogram); // Extracts the "_kilogram" values into a new array

  const maxKilogram = Math.max(...kilogramValues);
  const minKilogram = Math.min(...kilogramValues);

  return (
    <Container>
      {userActivity.map((element, index) => {
        return (
          <Fragment key={index}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={element}
                margin={{ top: 20, right: 50, left: 20, bottom: 20 }}
              >
                <CartesianGrid
                  allowDataOverflow
                  strokeDasharray="4 1"
                  vertical={false}
                />
                <XAxis
                  allowDataOverflow
                  // dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={<CustomizedXAxisTick />}
                  // domain={[0, 7]}
                  scale="point"
                  padding={{ right: 12, left: 12, bottom: 0 }}
                />
                <YAxis
                  dataKey="calories"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  interval={1}
                  tick={<CustomizedYAxisTick />}
                />

                <Tooltip content={<CustomTooltip />} />
                <Legend
                  content={renderCustomizedLegend}
                  verticalAlign="top"
                  align="right"
                />
                <Bar
                  dataKey="kilogram"
                  fill="#282D30"
                  barSize={7}
                  radius={[15, 15, 0, 0]}
                />

                <Bar
                  dataKey="calories"
                  fill="#E60000"
                  barSize={7}
                  radius={[15, 15, 0, 0]}
                >
                  <Cell cursor="pointer" fill="#E60000" key={`cell-${index}`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Fragment>
        );
      })}
    </Container>
  );
}

BarChartComponent.propTypes = {
  userActivity: PropTypes.array
};
