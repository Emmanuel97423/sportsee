import React from 'react';
import styles from './styles.module.css';

const icons = [
  {
    id: 1,
    url: '/img/icons/icon_01.png',
  },
  {
    id: 2,
    url: '/img/icons/icon_02.png',
  },
  {
    id: 3,
    url: '/img/icons/icon_03.png',
  },
  {
    id: 4,
    url: '/img/icons/icon_04.png',
  },
];

export default function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.iconsList}>
        {icons.map((icon) => {
          return <img src={icon.url} alt="icon" />;
        })}
      </div>
      <div className={styles.copyright}>
        <p>Copyight, SportSee 2020</p>
      </div>
    </div>
  );
}
