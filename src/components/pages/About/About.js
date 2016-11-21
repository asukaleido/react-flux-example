import React from 'react';
import { Heading } from '../../ui/atoms';
import s from './About.css';

export default function About() {
  return (
    <main className={s.root}>
      <div className={s.container}>
        <Heading>About</Heading>
      </div>
    </main>
  );
}
