import React from 'react';
import { Heading } from '../../ui/atoms';
import { Title } from '../../ui/molecules';
import s from './HomePage.css';

export default function HomePage() {
  return (
    <main className={s.root}>
      <Title />
      <div className={s.container}>
        <Heading>HomePage</Heading>
      </div>
    </main>
  );
}
