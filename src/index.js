import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './reset.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';
import LayoutDefault from './layout/LayoutDefault';
// import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// import SideBar from './components/Nav/SideBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        path: '/Dashboard/:id',
        element: <Dashboard />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SideBar /> */}

    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
