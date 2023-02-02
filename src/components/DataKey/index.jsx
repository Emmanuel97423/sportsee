/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

export default function DataKey(props) {
  const Container = styled.div`
    height: 125px;
    background-color: #fbfbfb;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    padding-left: 32px;
    margin-bottom: 40px;
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
    <div>
      <Container>
        <Icon src="/img/icons/calories-icon.png" alt="icon" />
        <div>
          <Text>155g</Text>
          <Span>Calories</Span>
        </div>
      </Container>
      <Container>
        <Icon src="/img/icons/icon_protein.png" alt="icon" />
        <div>
          <Text>155g</Text>
          <Span>Proteines</Span>
        </div>
      </Container>
      <Container>
        <Icon src="/img/icons/carbs-icon.png" alt="icon" />
        <div>
          <Text>155g</Text>
          <Span>Glucides</Span>
        </div>
      </Container>
      <Container>
        <Icon src="/img/icons/fat-icon.png" alt="icon" />
        <div>
          <Text>155g</Text>
          <Span>Lipides</Span>
        </div>
      </Container>
    </div>
  );
}
