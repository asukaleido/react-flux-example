import classNames from 'classnames';
import React from 'react';
import s from './Text.css';

export default function Text({ children, className }) {
  return (
    <span className={classNames(className, s.container)}>
      {children}
    </span>
  );
}

Text.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ]),
  className: React.PropTypes.string,
};
