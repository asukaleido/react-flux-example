import classNames from 'classnames';
import React from 'react';
import s from './Navigation.css';
import { Link } from '../../atoms';

export default function Navigation({ className }) {
  return (
    <div className={classNames(className, s.root)}>
      <div className={s.container}>
        <ul className={classNames(s.list, s.right)}>
          <li>
            <Link
              className={s.link}
              target="_blank"
              to="https://github.com/asukaleido/react-flux-example"
            >Github</Link>
          </li>
        </ul>
        <ul className={s.list}>
          <li>
            <Link className={s.link} to="/">Home</Link>
          </li>
          <li>
            <Link className={s.link} to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  className: React.PropTypes.string,
};
