import { Subject } from 'rxjs/Subject';
import * as PageDispatcher from '../dispatchers/PageDispatcher';

export const readyToDisplay = new Subject();
export const loadingProgress = new Subject();

PageDispatcher.readyToDisplay.subscribe(readyToDisplay.next.bind(readyToDisplay));
PageDispatcher.loadingProgress.subscribe(loadingProgress.next.bind(loadingProgress));
