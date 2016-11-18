import React from 'react';
import { Link } from 'react-router';
import s from './Title.css';

export default function Title() {
  return (
    <header className={s.root}>
      <div className={s.container}>
        <span>React with Flux Examples</span>
      </div>
    </header>
  );
}
