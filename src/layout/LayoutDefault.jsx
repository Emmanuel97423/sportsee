import React from 'react';
import NavBar from '../components/Nav/NavBar';

export default function LayoutDefault({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
