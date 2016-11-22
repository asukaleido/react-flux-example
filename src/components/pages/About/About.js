import React from 'react';
import { Heading } from '../../ui/atoms';
import { AboutAction, PageAction } from '../../../actions';
import { AboutStore, PageStore } from '../../../stores';
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

PageStore.readyToDisplay
  .filter(({ page }) => page === About)
  .subscribe(({ complete }) => {
    complete();
  });

About.load = function load(params, replace, callback) {
  const props = { callback, params, replace };
  const observables = ['title', 'descripiton', 'items'].map(key => AboutStore[key]);
  PageAction.waitForLoading(About, observables, props);
  AboutAction.fetchTitle();
  AboutAction.fetchDescription();
  AboutAction.fetchItems();
};
