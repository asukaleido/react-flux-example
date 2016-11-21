import React from 'react';
import { Text } from '../../atoms';
import s from './Footer.css';

export default function Footer() {
  return (
    <footer className={s.root}>
      <div className={s.container}>
        <Text>© asukaleido</Text>
      </div>
    </footer>
  );
}
