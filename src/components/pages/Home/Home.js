import React from 'react';
import { Heading } from '../../ui/atoms';
import { Title } from '../../ui/molecules';
import s from './Home.css';

export default function Home() {
  return (
    <main className={s.root}>
      <Title />
      <div className={s.container}>
        <Heading>Home</Heading>
      </div>
    </main>
  );
}
