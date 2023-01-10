import React from 'react';
import NavBar from '../components/Nav/NavBar';
// import SideBar from '../components/Nav/SideBar';
// eslint-disable-next-line import/no-cycle

export default function LayoutDefault({ children }) {
  const style = { height: '100%' };
  return (
    <div style={style}>
      <NavBar />
      {/* <SideBar /> */}

      <main>{children}</main>
    </div>
  );
}
