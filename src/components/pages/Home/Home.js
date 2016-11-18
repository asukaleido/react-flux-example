import React from 'react';
import { Title } from '../../ui/molecules';
import s from './Home.css';

export default function Home() {
  return (
    <main className={s.root}>
      <Title />
      <div className={s.container}>
        <h1>Home</h1>
      </div>
    </main>
  );
}
