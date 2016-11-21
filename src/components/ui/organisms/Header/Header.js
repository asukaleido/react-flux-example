import classNames from 'classnames';
import React from 'react';
import { Link } from '../../atoms';
import s from './Header.css';

export default function Header() {
  return (
    <header className={s.root}>
      <div className={s.container}>
        <Link className={classNames(s.link, s.home)} to="/">React</Link>
        <div className={s['nav-list']}>
          <ul className={s.nav}>
            <li>
              <Link className={s.link} to="/">Home</Link>
            </li>
            <li>
              <Link className={s.link} to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
