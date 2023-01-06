/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/LayoutDefault';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './App.css';
// import BarChartComponent from './components/BarChartComponent';
// import data from './__mock__/data.json';

// const userActivity = data.usersActivity;

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Dashboard/:id" element={<Dashboard />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
