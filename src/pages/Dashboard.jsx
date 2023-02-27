/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import BarChartComponent from '../components/BarChartComponent';
import RadarChartComponent from '../components/RadarChartComponent';
import LineChartComponent from '../components/LineChartComponent';
import RadialChartComponent from '../components/RadialChartComponent';
import DataKey from '../components/DataKey';
import mockDataJson from '../__mock__/data.json';
import HttpService from '../service/httpService';

import Activity from '../models/activity/Activity';
import Average from '../models/average/Average';
import Performance from '../models/performances/Performance';

function filterUsers(userDataFiltered, id) {
  return userDataFiltered.filter((user) => user.id === id);
}

/**
 * Filter the user's average data for mock
 * @funtion
 * @param {Array} userDataAverage - array of average data
 * @param {string} id - user id
 */
function filterUserAverage(userDataAverage, id) {
  return userDataAverage.filter((average) => average.userId === id);
}

/**
 * Filters user performances by a given user ID.
 * @function
 * @param {Array} userDataPerformances - Array of user performances.
 * @param {string|number} id - The user ID to filter by.
 * @returns {Array} - Array of filtered user performances.
 */
function filterUserPerformances(userDataPerformances, id) {
  return userDataPerformances.filter(
    (performance) => performance.userId === id
  );
}

function filterById(data, id) {
  return data.filter((item) => item.userId === id);
}

/**
 * Render dashboard page.
 * @component
 *
 * @returns {JSX.element} - Page with user data.
 */

export default function Dashboard() {
  const { id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  // let [query, setQuery] = React.useState(searchParams.get('mockData'));
  const parseIntId = parseInt(id, 10);

  const [averageState, setAverageState] = useState([]);
  const [activityState, setActivityState] = useState([]);
  const [performancesState, setPerformancesState] = useState([]);
  const [data, setData] = useState([]);
  const [firstNameState, setFirstNameState] = useState('FirstName');
  const [todayScoreState, setTodayScore] = useState([]);

  const [dataKey, setDataKey] = useState({
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0
  });

  const mockData = process.env.REACT_APP_MOCK_DATA;

  useEffect(() => {
    if (!mockData) {
      HttpService.getPerformanceByUserId(id)
        .then((performance) => {
          const performanceDataByApi = performance.data.data;
          const performancesClasse = new Performance(performanceDataByApi);
          setPerformancesState([...performancesState, performancesClasse]);
        })
        .catch((error) => {
          console.log('error:', error);
        });

      HttpService.getUserById(id)
        .then((response) => {
          const dataFetched = response.data.data;
          setData([...data, dataFetched]);
          const { firstName } = dataFetched.userInfos;

          setFirstNameState(firstName);
          setTodayScore([...todayScoreState, dataFetched]);
          setDataKey({
            ...dataKey,
            calorieCount: dataFetched.keyData.calorieCount,
            carbohydrateCount: dataFetched.keyData.carbohydrateCount,
            lipidCount: dataFetched.keyData.lipidCount,
            proteinCount: dataFetched.keyData.proteinCount
          });
          HttpService.getActivityByUserId(id)
            .then((activity) => {
              const activityApiResponse = activity.data.data;
              const activityClassModel = new Activity(activityApiResponse);
              setActivityState([...activityState, activityClassModel.sessions]);
              HttpService.getAverageSessionsByUserId(id)
                .then((averageSession) => {
                  const averageSessionByApi = averageSession.data.data;
                  const AverageClasse = new Average(averageSessionByApi);
                  setAverageState(AverageClasse.sessions);
                  setAverageState(averageSessionByApi.sessions);
                })
                .catch((error) => {
                  console.log('error:', error);
                });
            })
            .catch((error) => {
              console.log('error:', error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      const performancesFilter = filterUserPerformances(
        mockDataJson.performances,
        parseIntId
      );
      const performancesClasse = new Performance(performancesFilter[0]);
      setPerformancesState([...performancesState, performancesClasse]);

      const activityFilterByUserId = filterById(
        mockDataJson.usersActivity,
        parseIntId
      );

      const activityClass = new Activity(activityFilterByUserId[0]);
      setActivityState([...activityState, activityClass.sessions]);
      // Mock Data
      setData((prevState) => [...prevState, mockDataJson]);
      const filteredUser = filterUsers(mockDataJson.users, parseIntId);
      const { firstName } = filteredUser[0].userInfos;
      const { keyData } = filteredUser[0];
      setTodayScore([...todayScoreState, filteredUser[0]]);
      setDataKey({
        ...dataKey,
        calorieCount: keyData.calorieCount,
        carbohydrateCount: keyData.carbohydrateCount,
        lipidCount: keyData.lipidCount,
        proteinCount: keyData.proteinCount
      });
      setFirstNameState(firstName);
      const filteredAverage = filterUserAverage(
        mockDataJson.average,
        parseIntId
      );

      const AverageClasse = new Average(filteredAverage[0]);
      setAverageState(AverageClasse.sessions);
    }
  }, []);

  const Div = styled.div`
    padding: 15px 15px 0 130px;
  `;

  const Title = styled.div.attrs(() => ({}))`
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
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  `;
  const Main = styled.div`
    width: 80%;
    padding: 0 20px 0 0;
    @media (max-width: 1024px) {
      width: 100%;
    }
  `;
  const Box = styled.div`
    height: auto;
    display: flex;
    justify-content: space-between;
  `;

  const BoxLine = styled.div`
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    background-color: #fbfbfb;
    padding: 20px 0 20px 0;
  `;

  const SideBox = styled.div``;

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
            <BarChartComponent userActivity={activityState} />
          </BoxLine>
          <Box>
            <LineChartComponent average={averageState} userId={parseIntId} />
            <RadarChartComponent
              performances={performancesState}
              userId={parseIntId}
            />
            <RadialChartComponent todayScore={todayScoreState} />
          </Box>
        </Main>

        <SideBox>
          <DataKey dataKey={dataKey} />
        </SideBox>
      </Container>
    </Div>
  );
}
