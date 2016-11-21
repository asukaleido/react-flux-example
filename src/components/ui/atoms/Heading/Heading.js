import classNames from 'classnames';
import React from 'react';
import s from './Heading.css';

export default function Heading({ children, className }) {
  return (
    <h1 className={classNames(className, s.container)}>
      {children}
    </h1>
  );
}

Heading.propTypes = {
  children: React.PropTypes.string,
  className: React.PropTypes.string,
};
