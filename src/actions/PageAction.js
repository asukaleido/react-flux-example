import * as PageDispatcher from '../dispatchers/PageDispatcher';

/* eslint-disable import/prefer-default-export */

export function waitForLoading(page, observables, { callback, params, replace }) {
  PageDispatcher.waitForLoading.next({ complete: callback, observables, page, params, replace });
}
