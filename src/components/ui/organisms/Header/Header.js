import React from 'react';
import s from './Header.css';
import { HomeLink } from '../../atoms';
import { Navigation } from '../../molecules';

export default function Header() {
  return (
    <header className={s.root}>
      <div className={s.container}>
        <HomeLink className={s.home} />
        <Navigation className={s.nav} />
      </div>
    </header>
  );
}
