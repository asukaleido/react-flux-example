import classNames from 'classnames';
import React from 'react';
import s from './ProgressBar.css';

export default function ProgressBar({ className, percent = 0 }) {
  const isLoading = percent !== 0 && percent !== 100;
  return (
    <div className={classNames(className, s.container, { [s['is-loading']]: isLoading })}>
      <div className={s.bar} style={{ width: `${percent}%` }} />
    </div>
  );
}

ProgressBar.propTypes = {
  className: React.PropTypes.string,
  percent: React.PropTypes.number,
};
