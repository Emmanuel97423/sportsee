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
  LabelList,
} from 'recharts';
import Activity from '../../models/activity/Activity';

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

export default function BarChart({ userActivity }) {
  console.log('userActivity:', userActivity);
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
        <LabelList dataKey="name" content={renderCustomizedLabel} />
      </Bar>
      <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
    </BarChart>
  );
  // return (
  //   <>
  //     BarChart
  //     {userActivity.map((element, index) => {
  //       const { sessions } = element;

  //       const activity = new Activity(sessions);
  //       return activity.sessions.map((session) => {
  //         // eslint-disable-next-line react/jsx-no-useless-fragment
  //         return (
  //           <Fragment key={index}>
  //             <ul>
  //               <li key={index}>
  //                 <h2>day: {session.day}</h2>
  //                 <h2>calories: {session.calories}</h2>
  //                 <h2>kilogram: {session.kilogram}</h2>
  //               </li>
  //             </ul>
  //           </Fragment>
  //         );
  //       });
  //     })}
  //   </>
  //   // <div>{userSessions}</div>
  //   // <LineChart width={400} height={400} data={data}>
  //   //   <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  //   // </LineChart>
  // );
}
