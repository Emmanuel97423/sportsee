import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BarChartComponent from './components/BarChartComponent';
import data from './__mock__/data.json';

const userActivity = data.usersActivity;

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <BarChartComponent userActivity={userActivity} />
    </div>
  );
}

export default App;
