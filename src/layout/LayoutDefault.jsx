// eslint-disable-next-line import/no-cycle
/**

*@file LayoutDefault.jsx
*@author Emmanuel Narcisse
*@description This file contains the layout component for the default layout.
*/

import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Nav/NavBar';
import SideBar from '../components/Nav/SideBar';

/**
 *The LayoutDefault component.
 *@returns {JSX.Element} The LayoutDefault component.
 */

export default function LayoutDefault() {
  const style = { height: '100%' };
  return (
    <div style={style}>
      <NavBar />
      <SideBar />

      <Outlet />

      {/* <main>{children}</main> */}
    </div>
  );
}
