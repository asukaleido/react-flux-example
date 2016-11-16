import React from 'react';
import { Link } from 'react-router';
import s from './Header.css';

export default function Header() {
  return (
    <header className={s.root}>
      <div className={s.container}>
        <Link className={s.link} to="/">Home</Link>
        <Link className={s.link} to="/about">About</Link>
      </div>
    </header>
  );
}
