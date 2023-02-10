/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */

/**
 * BarChartComponent
 *
 * Renders a bar chart showing the weight and calories burned by the user in each session.
 *
 * @component
 * @param {Array} userActivity - The array of user activity objects.
 * @returns {JSX} The BarChart component.
 */

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
  ResponsiveContainer
} from 'recharts';
import styled from 'styled-components';

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

/**

BarChartComponent - main component for generating a bar chart
@param {Object} props
@param {Array} props.userActivity - an array of user activity data used to generate the chart
@returns {JSX.Element} returns a bar chart component
*/

export default function BarChartComponent({ userActivity }) {
  return (
    <>
      {userActivity.map((element, index) => {
        return (
          <Fragment key={index}>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart
                width={300}
                height={400}
                data={element.sessions}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey={index} axisLine={false} tickLine={false} />
                <YAxis orientation="right" axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  content={renderCustomizedLegend}
                  verticalAlign="top"
                  align="right"
                />
                <Bar
                  dataKey="kilogram"
                  fill="#282D30"
                  minPointSize={5}
                  barSize={7}
                  radius={[15, 15, 0, 0]}
                />

                <Bar
                  dataKey="calories"
                  fill="#E60000"
                  barSize={7}
                  minPointSize={10}
                  radius={[15, 15, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Fragment>
        );
      })}
    </>
  );
}

BarChartComponent.propTypes = {
  userActivity: PropTypes.array
};
