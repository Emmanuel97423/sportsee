/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useRoutes,
  RouteObject
} from 'react-router-dom';

// import DefaultLayout from './layout/LayoutDefault';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  <Router>
    {/* <DefaultLayout> */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Dashboard/:id" element={<Dashboard />} />
    </Routes>
    {/* </DefaultLayout> */}
  </Router>;
}

export default App;
