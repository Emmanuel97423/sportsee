import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../SportSeeLogo.png';
import styles from './styles.module.css';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <ul className={styles.containerList}>
        <li className={styles.containerListItem}>
          <Link to="/">
            <img src={logo} alt="SportSeeLogo" className={styles.logo} />
          </Link>
        </li>
        <li className={styles.containerListItem}>
          <Link to="/Dashboard/12">Dashboard</Link>
        </li>
        <li className={styles.containerListItem}>Profil</li>
        <li className={styles.containerListItem}>Règlage</li>
        <li className={styles.containerListItem}>Communauté</li>
      </ul>
    </div>
  );
}
