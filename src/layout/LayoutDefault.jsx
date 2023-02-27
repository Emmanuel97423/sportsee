// eslint-disable-next-line import/no-cycle
/**

*@file LayoutDefault.jsx
*@author Emmanuel Narcisse
*@description This file contains the layout component for the default layout.
*/

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/Nav/NavBar';
import SideBar from '../components/Nav/SideBar';

const OutletContainer = styled.div`
  width: 100%;
`;

/**
 *The LayoutDefault component.
 *@returns {JSX.Element} The LayoutDefault component.
 */

export default function LayoutDefault() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </div>
  );
}
