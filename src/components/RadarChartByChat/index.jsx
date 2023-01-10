import React from 'react';
import { Radar } from 'recharts';

export default function RadarChart(props) {
  const { performances } = props;
  return (
    <Radar data={performances}>
      {performances[0].data.map((item) => (
        <Radar
          key={item.getName()}
          name={item.getName()}
          dataKey={item.value}
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      ))}
    </Radar>
  );
}
