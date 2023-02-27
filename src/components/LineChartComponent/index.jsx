/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { LineChart, XAxis, Tooltip, Legend, Line, Dot } from 'recharts';

// Styled-component for container

const Container = styled.div`
  background-color: red;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled-component for Tooltip

const TooltopDiv = styled.div`
  background-color: #fff;
  width: 40px;
  height: 25px;
  font-size: 8px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Styled-component for Legend

const LegendCustom = styled.div`
  width: 100%;
  color: #fff;
`;
const LegendText = styled.p`
  opacity: 0.6;
`;

// Styled-component for the chart gradient

const GradientChart = styled.div.attrs(() => ({ tabIndex: 0 }))`
  position: absolute;
  width: 275px;
  height: 303px;
  opacity: 0.1;
  &.gradient-lineChart {
    background: linear-gradient(90deg, transparent 0% 50%, #000 50 100%);
  }
`;

/**
 * Custom tooltip component
 * @function
 * @param {Object} props - active, payload
 */

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <TooltopDiv>
        <p className="label">{`${payload[0].value} min`}</p>
      </TooltopDiv>
    );
  }

  return null;
}

/**
 * Customized dot component
 * @function
 */
function CustomizedDot({ cx, cy }) {
  return (
    <Dot
      r={5}
      fill="#fff"
      stroke="#fff"
      strokeWidth={15}
      strokeOpacity={0.3}
      cx={cx}
      cy={cy}
    />
  );
}

/**
 * Customized Legend component
 * @function
 * @returns {JSX.Element} - a customized legend component
 */

function renderLegend() {
  return (
    <LegendCustom>
      <LegendText>Durée moyenne des sessions</LegendText>
    </LegendCustom>
  );
}

/**
 *
 * @component
 * @param {object} props
 * @param {array} props.average - Array of average data
 * @param {string} props.userId - ID of user
 * @returns {JSX.Element} - Renders a Line Chart component
 */

export default function LineChartComponent({ average, userId }) {
  const chartRef = useRef(null);

  // Function to format X-axis tick labels
  const numberX = (item) => {
    const nameTab = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return `${nameTab[item - 1]}`;
  };

  function mouseMove(e) {
    if (!e.isTooltipActive) {
      return;
    }
    const chartWidth = chartRef.current.props.width;
    const x = e.activeCoordinate.x;
    const y = e.activeCoordinate.y;
    const pourcent = (x / chartWidth) * 100;
    const reste = 100 - pourcent;

    const gradientLine = document.querySelector('.gradient-lineChart');
    gradientLine.setAttribute(
      'style',
      `background: linear-gradient(90deg, transparent,transparent,transparent, transparent  0 ${pourcent}%,  #000,#000,#000,#000 ${reste}% 100%)`
    );
  }

  return (
    <Container>
      <GradientChart className="gradient-lineChart"></GradientChart>
      <LineChart
        ref={chartRef}
        width={275}
        height={275}
        data={average}
        margin={{ top: 0, right: 0, left: 0, bottom: 30 }}
        onMouseMove={mouseMove}
      >
        <defs>
          {' '}
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 0.4 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 0.5 }}
            />
            <stop
              offset="75%"
              style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 0.7 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          domain={['dataMin + 1', 'dataMax']}
          interval={0}
          tickMargin={20}
          tick={{
            fill: '#fff',
            opacity: '0.5',
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14
          }}
          tickFormatter={numberX}
          style={{ transform: 'scaleX(0.9)', transformOrigin: 'bottom' }}
        />

        <Tooltip payload={average} content={<CustomTooltip />} cursor={false} />
        <Legend
          align="left"
          verticalAlign="top"
          horizontalAlign="left"
          wrapperStyle={{
            width: '190px',
            height: 'auto',
            padding: '29px 34px'
          }}
          content={renderLegend}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#grad1)"
          strokeWidth={1.9}
          dot={false}
          activeDot={<CustomizedDot />}
        />
      </LineChart>
    </Container>
  );
}

LineChartComponent.propTypes = {
  average: propTypes.array,
  userId: propTypes.any
};
