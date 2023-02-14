/* eslint-disable prefer-destructuring */
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
import HttpService from '../service/httpService';

function filterUsers(userDataFiltered, id) {
  return userDataFiltered.filter((user) => user.id === id);
}

export default function Dashboard() {
  const { id } = useParams();
  const parseIntId = parseInt(id, 10);

  const [averageState, setAverageState] = useState(mockDataJson.average);
  const [activityState, setActivityState] = useState(
    mockDataJson.usersActivity
  );
  const [performancesState, setPerformancesState] = useState(
    mockDataJson.performances
  );
  // const [data, setData] = useState(mockDataJson);
  const [data, setData] = useState([]);
  const [firstNameState, setFirstNameState] = useState('FirstName');
  const [todayScoreState, setTodayScore] = useState([]);

  // const [todayScoreState, setTodayScore] = useState([]);
  const [dataKey, setDataKey] = useState({
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0
  });

  useEffect(() => {
    // Récupère un élément par ID
    HttpService.getUserById(id)
      .then((response) => {
        // Traite la réponse de la requête

        // console.log(response.data.data);
        const dataFetched = response.data.data;
        console.log('dataFetched:', dataFetched);
        setData([...data, dataFetched]);
        const { firstName } = dataFetched.userInfos;
        const todayScore = dataFetched.todayScore;

        setFirstNameState(firstName);
        setTodayScore([...todayScoreState, todayScore]);
      })
      .catch((error) => {
        // Traite les erreurs de la requête
        console.error(error);
      });

    // Mock Data

    // const userData = data.users;
    // const filteredUser = filterUsers(userData, parseIntId);
    // const { firstName } = filteredUser[0].userInfos;
    // const { keyData } = filteredUser[0];

    // setTodayScore([...todayScore, filteredUser[0]]);
    // setDataKey({
    //   ...dataKey,
    //   calorieCount: keyData.calorieCount,
    //   carbohydrateCount: keyData.carbohydrateCount,
    //   lipidCount: keyData.lipidCount,
    //   proteinCount: keyData.proteinCount
    // });
    // setFirstNameState(firstName);
  }, []);

  console.log('todayScoreState:', todayScoreState);
  console.log('data:', data);

  const activitySelectedByUserId = activityState.filter(
    (activity) => activity.userId === parseIntId
  );

  const Div = styled.div`
    max-width: 1200px;
    padding: 30px 30px 30px 150px;
  `;

  const Title = styled.div.attrs(() => ({
    tabIndex: 0
  }))`
    width: 100%;

    &.title,
    h1 {
      font-size: 48px;
    }
    span {
      color: red;
      font-size: 48px;
    }
    p {
      font-size: 18px;
      margin: 40px 0 100px 0;
    }
  `;

  const Container = styled.div`
    width: 100%;
    display: flex;
  `;
  const Main = styled.div`
    width: 100%;
  `;
  const Box = styled.div`
    height: auto;
    width: 97%;
    display: flex;
    justify-content: space-between;
  `;

  const BoxLine = styled.div`
    height: auto;
    width: 97%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    background-color: #fbfbfb;
    padding: 20px 0 20px 0;
  `;

  const SideBox = styled.div`
    width: 30%;
  `;

  return (
    <Div>
      <Title>
        <h1 className="title">
          Bonjour <span className="title__text--red">{firstNameState}</span>
        </h1>
        <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
      </Title>
      <Container>
        <Main>
          <BoxLine>
            <BarChartComponent userActivity={activitySelectedByUserId} />
          </BoxLine>
          <Box>
            <LineChartComponent average={averageState} userId={parseIntId} />

            <RadarChartComponent
              performances={performancesState}
              userId={parseIntId}
            />
            <RadialChartComponent data={data} />
          </Box>
        </Main>

        <SideBox>
          <DataKey dataKey={dataKey} />
        </SideBox>
      </Container>
    </Div>
  );
}
