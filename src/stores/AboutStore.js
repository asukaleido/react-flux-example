import { Subject } from 'rxjs/Subject';
import * as AboutDispatcher from '../dispatchers/AboutDispatcher';

export const title = new Subject();
export const descripiton = new Subject();
export const items = new Subject();

AboutDispatcher.fetchTitle.subscribe(title.next.bind(title));
AboutDispatcher.fetchDescription.subscribe(descripiton.next.bind(descripiton));
AboutDispatcher.fetchItems.subscribe(items.next.bind(items));
