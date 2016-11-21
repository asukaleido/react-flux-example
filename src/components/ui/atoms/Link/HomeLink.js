import classNames from 'classnames';
import React from 'react';
import { Link as LinkComponent } from 'react-router';
import s from './HomeLink.css';

export default function HomeLink({ className }) {
  return (
    <LinkComponent className={classNames(className, s.container)} to="/">React</LinkComponent>
  );
}

HomeLink.propTypes = {
  className: React.PropTypes.string,
};
