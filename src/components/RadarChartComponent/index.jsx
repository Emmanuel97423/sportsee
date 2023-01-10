/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import Performance from '../../models/performances/Performance';

// La fonction qui transforme la structure de données en tableau
// de données utilisable par le composant RadarChart
// function getData(performances) {
//   const { userId, kind, data } = performances;
//   console.log('performances:', performances);

//   // Création de l'objet de données pour le radar chart
//   const radarData = { userId };

//   // Remplissage de l'objet de données avec les valeurs
//   // de chaque "kind"
//   data.forEach((item) => {
//     const { value, kind: itemKind } = item;
//     radarData[kind[itemKind]] = value;
//   });

//   return radarData;
// }

function filterUserPerformances(userDataPerformances, id) {
  return userDataPerformances.filter(
    (performance) => performance.userId === id,
  );
}

// Le composant qui affiche le radar chart
export default function RadarChartComponent({ performances, userId }) {
  const filteredPerformance = filterUserPerformances(performances, userId);

  const performance = new Performance(filteredPerformance[0]);
  const formatData = performance.dataItem.map((d) => {
    return {
      subject: performance.kind[d.kind],
      A: d.value,
    };
  });

  return (
    // <RadarChart data={performances.dataItem[0]}>
    //   <PolarGrid />
    //   <PolarAngleAxis dataKey={performances.dataItem[0].kinds} />
    //   <PolarRadiusAxis angle={30} domain={[0, 240]} />
    //   <Radar
    //     name="Cardio"
    //     dataKey={performances}
    //     stroke="#8884d8"
    //     fill="#8884d8"
    //     fillOpacity={0.6}
    //   />
    //   <Radar
    //     name="Endurance"
    //     dataKey={performances}
    //     stroke="#8884d8"
    //     fill="#8884d8"
    //     fillOpacity={0.6}
    //   />
    // </RadarChart>
    <>
      <RadarChart outerRadius={90} width={730} height={250} data={formatData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 240]} />
        <Radar
          name={userId}
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
      {/* {performances.map((item, index) => {
        console.log('index:', index);
        console.log('item:', item);
      })} */}
      {/* {data.map((element, index) => {
        return (
          <Fragment key={index}>
            <ResponsiveContainer width="100%" height={320}>
              <RadarChart data={element}>
                <PolarGrid />
                <PolarAngleAxis dataKey={element} />
                <PolarRadiusAxis angle={30} domain={[0, 240]} />
                <Radar
                  name="Cardio"
                  dataKey={element.cardio}
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Endurance"
                  dataKey={element.endurance}
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </Fragment>
        );
      })} */}
    </>
  );
}
