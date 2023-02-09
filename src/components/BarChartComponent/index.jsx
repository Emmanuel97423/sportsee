/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
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
  ResponsiveContainer
} from 'recharts';
import styled from 'styled-components';

const DivTooltip = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
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

// const CustomBar = styled(Bar)`
//   &.recharts-bar {
//     &:first-child {
//       border-top-left-radius: 15px;
//       border-top-right-radius: 15px;
//     }
//   }
// `;

// function ShapeBar({ x, y, width, height, fill, payload, value, radius }) {
//   // const LineBar = styled.div`
//   //   color: green;
//   // `;
//   // console.log('props:', props);
//   return (
//     <rect
//       x={x}
//       y={y}
//       width={width}
//       height={height}
//       fill={fill}
//       // rx={5}
//       radius={10}
//     />
//   );
// }
// function CustomShape(props) {
//   const { x, y, width, height, fill } = props;
//   const radius = 5;

//   return (
//     <path
//       d={`M${x},${y + height}
//              v-${height - 2 * radius}
//              a${radius},${radius} 0 0 1 ${radius},${radius}
//              h${width - 2 * radius}
//              a${radius},${radius} 0 0 1 ${radius},-${radius}
//              v${height - 2 * radius}
//              Z`}
//       fill={fill}
//     />
//   );
// }

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
                <Tooltip
                  content={<CustomTooltip />}
                  // itemStyle={<CustomItemStyle />}
                  // contentStyle={<CustomContentStyle />}
                />
                {/* <Tooltip /> */}
                <Legend
                  content={renderCustomizedLegend}
                  verticalAlign="top"
                  align="right"
                />
                {/* <CustomBar dataKey="kilogram" fill="#282D30" /> */}
                <Bar
                  dataKey="kilogram"
                  fill="#282D30"
                  minPointSize={5}
                  barSize={7}
                  // shape={<ShapeBar />}
                  // rectangle={{ radius: 15 }}
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
