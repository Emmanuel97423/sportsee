import React from 'react';
import { useParams } from 'react-router-dom';
import BarChartComponent from '../components/BarChartComponent';
import data from '../__mock__/data.json';

const userActivity = data.usersActivity;
const userData = data.users;

export default function Dashboard() {
  const { id } = useParams();
  const parseIntId = parseInt(id, 10);
  // eslint-disable-next-line array-callback-return
  const activitySelectedByUserId = userActivity.filter(
    (activity) => activity.userId === parseIntId,
  );
  const userSelected = userData.filter((user) => user.id === parseIntId);
  const { firstName } = userSelected[0].userInfos;
  // const userInfosFirstName = () => {
  //   userSelected.map((user) => {
  //     const { firstName } = user.userInfos;
  //     return firstName;
  //   });
  // };
  return (
    <div className="container">
      <h1>Bonjour {firstName}</h1>
      <BarChartComponent userActivity={activitySelectedByUserId} />
    </div>
  );
}
