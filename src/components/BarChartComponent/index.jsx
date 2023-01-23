/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import React, { Fragment } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function legendRenderColor(value) {
  let isCalories = false;
  if (value === 'calories') isCalories = true;

  return (
    <div>
      {isCalories ? (
        <span
          style={{
            color: ' #74798C',
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '24px',
            letterSpacing: '0px',
            textAlign: 'left',
          }}
        >
          Calories brûlées (kCal)
        </span>
      ) : (
        <span
          style={{
            color: ' #74798C',
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '24px',
            letterSpacing: '0px',
            textAlign: 'left',
          }}
        >
          Poids (kg)
        </span>
      )}
    </div>
  );
}

function renderCustomizedLegend(props) {
  const { payload } = props;

  return (
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
  );
}
export default function BarChartComponent({ userActivity }) {
  return (
    <>
      {userActivity.map((element, index) => {
        console.log('element:', element);
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
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={index} />
                <YAxis />
                <Tooltip />
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
                />

                <Bar
                  dataKey="calories"
                  fill="#E60000"
                  barSize={7}
                  minPointSize={10}
                />
              </BarChart>
            </ResponsiveContainer>
          </Fragment>
        );
      })}
    </>
  );
}
