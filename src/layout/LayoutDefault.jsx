import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../components/Nav/NavBar';
import SideBar from '../components/Nav/SideBar';
// eslint-disable-next-line import/no-cycle

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
