/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import BarChartComponent from '../components/BarChartComponent';
import RadarChartComponent from '../components/RadarChartComponent';
// import RadarChartByChat from '../components/RadarChartByChat';
import mockDataJson from '../__mock__/data.json';

// import Performance from '../models/performances/Performance';

function filterUsers(userDataFiltered, id) {
  return userDataFiltered.filter((user) => user.id === id);
}

function filterUserPerformances(userDataPerformances, id) {
  return userDataPerformances.filter(
    (performance) => performance.userId === id,
  );
}

export default function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState(mockDataJson);
  // const userActivity = data.usersActivity;
  const userPerformances = data.performances;
  const userData = data.users;

  const [performancesState, setPerformancesState] = useState(
    mockDataJson.performances,
  );
  const [firstNameState, setFirstNameState] = useState('FirstName');

  const parseIntId = parseInt(id, 10);

  useEffect(() => {
    const filteredUser = filterUsers(userData, parseIntId);
    const { firstName } = filteredUser[0].userInfos;
    setFirstNameState(firstName);
    // const filteredPerformances = filterUserPerformances(
    //   userPerformances,
    //   parseIntId,
    // );

    // const filteredPerformancesObject = filteredPerformances[0];

    // setPerformancesState([...performancesState, filteredPerformancesObject]);

    // const performance = new Performance(filteredPerformancesObject);

    // setPerformancesState({
    //   ...performancesState,
    //   userId: filteredPerformancesObject.userId,
    //   kind: filteredPerformancesObject.kind,
    //   data: filteredPerformancesObject.data,
    // });
    // eslint-disable-next-line array-callback-return
    // const activitySelectedByUserId = userActivity.filter(
    //   (activity) => activity.userId === parseIntId,
    // );
    // const userSelected = userData.filter((user) => user.id === parseIntId);
    // setFirstName(userSelected[0].userInfos.firstName);
    // const performancesSelectedByUserId = performances.filter(
    //   (performance) => performance.userId === parseIntId,
    // );
    // const performancesClasse = new Performance(performancesSelectedByUserId[0]);
  }, []);

  return (
    <div className="container">
      <h1>Bonjour {firstNameState}</h1>
      {/* <BarChartComponent userActivity={activitySelectedByUserId} /> */}
      <RadarChartComponent
        performances={performancesState}
        userId={parseIntId}
      />
    </div>
  );
}
