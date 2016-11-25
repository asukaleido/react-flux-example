import { Observable, Subject } from 'rxjs';

export const waitForLoading = new Subject();
export const readyToDisplay = new Subject();
export const loadingProgress = new Subject();

waitForLoading.subscribe(({ complete, observables, page, params, replace }) => {
  Observable
    .zip(...observables.map(observable => observable.take(1)))
    .subscribe(() => {
      readyToDisplay.next({ complete, page, params, replace });
    });
  Observable
    .merge(...observables.map(observable => observable.map(() => 1).take(1)))
    .scan((x, y) => x + y)
    .startWith(0)
    .subscribe(rate => {
      loadingProgress.next({ page, percent: Math.ceil((rate / observables.length) * 100) });
    });
});
