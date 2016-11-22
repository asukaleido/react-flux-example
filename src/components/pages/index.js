import React from 'react';
import { Footer, Header } from '../ui/organisms';
import './index.css';

export default function Index({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Index.propTypes = {
  children: React.PropTypes.element,
};

export * from './About';
export * from './Home';
