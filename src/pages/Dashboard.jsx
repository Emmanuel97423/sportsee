/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
/* eslint-disable no-unreachable */
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

import UserData from '../models/user/MainData';
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

  const parseIntId = parseInt(id, 10);

  const [apiResponse, setApiResponse] = useState(false);
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

  useEffect(() => {
    const userDataServiceResponse = new HttpService(id);
    userDataServiceResponse.userById
      .then((user) => {
        const userFetchApi = user.data.data;
        setApiResponse(true);
        const userDataClass = new UserData(userFetchApi);
        setData([...data, userDataClass]);
        const { firstName } = userDataClass;
        setFirstNameState(firstName);
        setTodayScore([...todayScoreState, userDataClass]);
        setDataKey({
          ...dataKey,
          calorieCount: userDataClass.calorieCount,
          carbohydrateCount: userDataClass.carbohydrateCount,
          lipidCount: userDataClass.lipidCount,
          proteinCount: userDataClass.proteinCount
        });

        userDataServiceResponse.activityByUserId
          .then((activity) => {
            const activityApiResponse = activity.data.data;
            const activityClassModel = new Activity(activityApiResponse);
            setActivityState([...activityState, activityClassModel.sessions]);

            userDataServiceResponse.averageSessionsByUserId.then((sessions) => {
              const averageSessionByApi = sessions.data.data;
              const AverageClasse = new Average(averageSessionByApi);
              setAverageState(AverageClasse.sessions);
              setAverageState(averageSessionByApi.sessions);
            });
            userDataServiceResponse.perfomormancesByUserId
              .then((perfomances) => {
                const performanceDataByApi = perfomances.data.data;
                const performancesClasse = new Performance(
                  performanceDataByApi
                );
                setPerformancesState([
                  ...performancesState,
                  performancesClasse
                ]);
              })
              .catch((err) => {
                console.log('err:', err);
              });
          })
          .catch((error) => {
            console.log('error:', error);
          });
      })
      .catch((error) => {
        console.log('error:', error);
      });
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
      {apiResponse ? (
        <div>
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
                <LineChartComponent
                  average={averageState}
                  userId={parseIntId}
                />
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
        </div>
      ) : (
        <div>
          🚨 Oupss il semble que l&apos;API rencontre des problèmes, veuillez
          réessayer plus tard...
        </div>
      )}
    </Div>
  );
}
