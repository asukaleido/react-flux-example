import classNames from 'classnames';
import React from 'react';
import { Link as LinkComponent } from 'react-router';
import s from './Link.css';

export default function Link(_props) {
  const props = Object.assign({}, _props, {
    className: classNames(s.container, (_props || {}).className),
  });
  return (
    <LinkComponent {...props} />
  );
}

Link.propTypes = {
  className: React.PropTypes.string,
};
