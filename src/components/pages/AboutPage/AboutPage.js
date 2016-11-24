import React from 'react';
import { Heading } from '../../ui/atoms';
import { AboutAction, PageAction } from '../../../actions';
import { AboutStore, PageStore } from '../../../stores';
import s from './AboutPage.css';

export default function AboutPage() {
  return (
    <main className={s.root}>
      <div className={s.container}>
        <Heading>AboutPage</Heading>
      </div>
    </main>
  );
}

PageStore.readyToDisplay
  .filter(({ page }) => page === AboutPage)
  .subscribe(({ complete }) => {
    complete();
  });

AboutPage.load = function load(params, replace, callback) {
  const props = { callback, params, replace };
  const observables = ['title', 'descripiton', 'items'].map(key => AboutStore[key]);
  PageAction.waitForLoading(AboutPage, observables, props);
  AboutAction.fetchTitle();
  AboutAction.fetchDescription();
  AboutAction.fetchItems();
};
