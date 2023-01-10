/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BarChartComponent from '../components/BarChartComponent';
import RadarChartComponent from '../components/RadarChartComponent';
import mockDataJson from '../__mock__/data.json';

function filterUsers(userDataFiltered, id) {
  return userDataFiltered.filter((user) => user.id === id);
}

export default function Dashboard() {
  const { id } = useParams();
  const parseIntId = parseInt(id, 10);

  const [data, setData] = useState(mockDataJson);
  const [activityState, setActivityState] = useState(
    mockDataJson.usersActivity,
  );
  const [performancesState, setPerformancesState] = useState(
    mockDataJson.performances,
  );
  const [firstNameState, setFirstNameState] = useState('FirstName');

  useEffect(() => {
    const userData = data.users;
    const filteredUser = filterUsers(userData, parseIntId);
    const { firstName } = filteredUser[0].userInfos;
    setFirstNameState(firstName);
  }, []);
  const activitySelectedByUserId = activityState.filter(
    (activity) => activity.userId === parseIntId,
  );
  return (
    <div className="container">
      <h1>Bonjour {firstNameState}</h1>
      <BarChartComponent userActivity={activitySelectedByUserId} />
      <RadarChartComponent
        performances={performancesState}
        userId={parseIntId}
      />
    </div>
  );
}
