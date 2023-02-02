/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BarChartComponent from '../components/BarChartComponent';
import RadarChartComponent from '../components/RadarChartComponent';
import LineChartComponent from '../components/LineChartComponent';
import RadialChartComponent from '../components/RadialChartComponent';
import DataKey from '../components/DataKey';
import mockDataJson from '../__mock__/data.json';

function filterUsers(userDataFiltered, id) {
  return userDataFiltered.filter((user) => user.id === id);
}

export default function Dashboard() {
  const { id } = useParams();
  const parseIntId = parseInt(id, 10);

  const [data, setData] = useState(mockDataJson);
  const [firstNameState, setFirstNameState] = useState('FirstName');
  const [todayScore, setTodayScore] = useState([]);
  const [dataKey, setDataKey] = useState({
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0
  });

  const [activityState, setActivityState] = useState(
    mockDataJson.usersActivity
  );
  const [performancesState, setPerformancesState] = useState(
    mockDataJson.performances
  );

  const [averageState, setAverageState] = useState(mockDataJson.average);

  useEffect(() => {
    const userData = data.users;
    const filteredUser = filterUsers(userData, parseIntId);
    const { firstName } = filteredUser[0].userInfos;
    const { keyData } = filteredUser[0];

    setTodayScore([...todayScore, filteredUser[0]]);
    setDataKey({ ...dataKey, calorieCount: keyData.calorieCount });
    setFirstNameState(firstName);
  }, []);
  const activitySelectedByUserId = activityState.filter(
    (activity) => activity.userId === parseIntId
  );

  const Div = styled.div`
    padding: 30px;
  `;

  const Title = styled.div`
    width: 100%;
  `;

  const Container = styled.div`
    width: 100%;
    display: flex;
  `;
  const Main = styled.div`
    width: 80%;
  `;
  const Box = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `;

  const SideBox = styled.div`
    width: 20%;
  `;

  return (
    <Div>
      <Title>
        <h1>Bonjour {firstNameState}</h1>
      </Title>
      <Container>
        <Main>
          {/* <Box> */}
          <BarChartComponent userActivity={activitySelectedByUserId} />
          {/* </Box> */}
          {/* <Box> */}
          <LineChartComponent average={averageState} userId={parseIntId} />

          <RadarChartComponent
            performances={performancesState}
            userId={parseIntId}
          />
          <RadialChartComponent data={todayScore} />
          {/* </Box> */}
        </Main>

        <SideBox>
          <DataKey dataKey={dataKey} />
        </SideBox>
      </Container>
    </Div>
  );
}
