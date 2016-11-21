import React from 'react';
import s from './Header.css';
import { Link } from '../../atoms';
import { Navigation } from '../../molecules';

export default function Header() {
  return (
    <header className={s.root}>
      <div className={s.container}>
        <div className={s.home}>
          <Link to="/">React</Link>
        </div>
        <Navigation className={s.nav} />
      </div>
    </header>
  );
}
