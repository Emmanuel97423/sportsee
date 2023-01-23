import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Dot,
  Area,
} from 'recharts';
import Average from '../../models/average/Average';

/**
 * Filter the user's average data
 * @param {Array} userDataAverage - array of average data
 * @param {string} id - user id
 */
function filterUserAverage(userDataAverage, id) {
  return userDataAverage.filter((average) => average.userId === id);
}

/**
 * Custom tooltip component
 * @param {Object} props - active, payload
 */
function CustomTooltip({ active, payload }) {
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
 */
function CustomizedDot() {
  return (
    <Dot r={8} fill="#fff" stroke="#fff" strokeWidth={16} strokeOpacity={0.3} />
  );
}

/**
 * Customized Legend component
 * @returns {JSX.Element} - a customized legend component
 */
function renderLegend() {
  const LegendCustom = styled.div`
    width: 100%;
    color: #fff;
  `;
  const LegendText = styled.p`
    opacity: 0.5;
  `;

  return (
    <LegendCustom>
      <LegendText>Durée moyenne des sessions</LegendText>
    </LegendCustom>
  );
}

/**
 * @function
 * @param {object} props
 * @param {array} props.average - Array of average data
 * @param {string} props.userId - ID of user
 * @returns {JSX.Element} - Renders a Line Chart component
 */
export default function LineChartComponent({ average, userId }) {
  // Filter average data by user ID
  const averageFilterById = filterUserAverage(average, userId);
  // Create an instance of Average class
  const averageClasse = new Average(averageFilterById[0]);

  // Function to format X-axis tick labels
  const numberX = (item) => {
    const nameTab = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return `${nameTab[item - 1]}`;
  };

  // Styled-component for container
  const Container = styled.div`
    background-color: red;
    border-radius: 5px;
  `;

  return (
    <Container>
      <LineChart
        width={258}
        height={263}
        data={averageClasse.sessions}
        margin={{ top: 0, right: 0, left: 0, bottom: 30 }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          domain={['dataMin + 1', 'dataMax']}
          interval={0}
          tickMargin={20}
          tick={{
            fill: '#fff',
            fontFamily: 'Roboto',
            fontSize: 14,
          }}
          tickFormatter={numberX}
          style={{ transform: 'scaleX(0.9)', transformOrigin: 'bottom' }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          orientation="right"
          tooltipShow={false}
          tick={false}
          domain={['dataMin - 10', 'dataMax + 50']}
        />
        <Tooltip payload={averageClasse.sessions} content={<CustomTooltip />} />
        <Legend
          align="left"
          verticalAlign="top"
          horizontalAlign="left"
          wrapperStyle={{
            width: '190px',
            height: 'auto',
            padding: '29px 34px',
          }}
          content={renderLegend}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#82ca9d"
          dot={false}
          activeDot={<CustomizedDot />}
        />
        <Area type="monotone" dataKey="day" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
    </Container>
  );
}
