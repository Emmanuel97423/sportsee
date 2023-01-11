import React from 'react';

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import Average from '../../models/average/Average';

function filterUserAverage(userDataAverage, id) {
  return userDataAverage.filter((average) => average.userId === id);
}

export default function LineChartComponent({ average, userId }) {
  const averageFilterById = filterUserAverage(average, userId);
  const averageClasse = new Average(averageFilterById[0]);
  return (
    <div>
      <LineChart
        width={730}
        height={250}
        data={averageClasse.sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
