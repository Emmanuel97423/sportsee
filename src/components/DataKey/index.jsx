/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @function DataKey
 * @param {object} props - Object containing the properties of the DataKey component
 * @returns {JSX} - Returns a JSX component that displays information about the calorie count, carbohydrate count, lipid count, and protein count.
 */

export default function DataKey(props) {
  const calories = props.dataKey.calorieCount;
  const carbohydrateCount = props.dataKey.carbohydrateCount;
  const lipidCount = props.dataKey.lipidCount;
  const proteinCount = props.dataKey.proteinCount;

  const DataKeyContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px) {
      flex-direction: row;
    }
  `;
  const Container = styled.div`
    height: 125px;
    width: 210px;
    background-color: #fbfbfb;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    padding: 0 32px 0 32px;
    /* margin-bottom: 40px; */
  `;
  const Icon = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 24px;
  `;

  const Text = styled.p`
    font-weight: 700;
    font-size: 20px;
    color: #282d30;
  `;

  const Span = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #74798c;
  `;

  return (
    <DataKeyContainer>
      <Container>
        <Icon src="/img/icons/calories-icon.png" alt="icon" />
        <div>
          <Text>{calories}kCal</Text>
          <Span>Calories</Span>
        </div>
      </Container>
      <Container>
        <Icon src="/img/icons/icon_protein.png" alt="icon" />
        <div>
          <Text>{carbohydrateCount}g</Text>
          <Span>Proteines</Span>
        </div>
      </Container>
      <Container>
        <Icon src="/img/icons/carbs-icon.png" alt="icon" />
        <div>
          <Text>{lipidCount}g</Text>
          <Span>Glucides</Span>
        </div>
      </Container>
      <Container>
        <Icon src="/img/icons/fat-icon.png" alt="icon" />
        <div>
          <Text>{proteinCount}g</Text>
          <Span>Lipides</Span>
        </div>
      </Container>
    </DataKeyContainer>
  );
}

DataKey.propTypes = {
  props: PropTypes.object
};
