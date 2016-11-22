import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import * as Page from '../components/pages';

export const waitForLoading = new Subject();
export const readyToDisplay = new Subject();
export const loadingProgress = new Subject();

function getPercent(rate, total) {
  return Math.ceil((rate / total) * 100);
}

function subscribe(page, observables) {
  const total = observables.length;
  let rate = 0;
  loadingProgress.next({ page, percent: getPercent(rate, total) });
  const promises = observables
    .map(observable => new Promise(resolve => observable.take(1).subscribe(() => {
      rate += 1;
      loadingProgress.next({ page, percent: getPercent(rate, total) });
      resolve();
    })));
  return Promise.all(promises);
}

waitForLoading.subscribe(async ({ complete, observables, page, params, replace }) => {
  switch (page.name) {
    case Page.About.name:
      await subscribe(Page.About, observables);
      readyToDisplay.next({ complete, page, params, replace });
      break;
    default:
      break;
  }
});
