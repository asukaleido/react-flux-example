import * as AboutDispatcher from '../dispatchers/AboutDispatcher';

function interval(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export async function fetchTitle() {
  await interval(500);
  AboutDispatcher.fetchTitle.next();
}

export async function fetchDescription() {
  await interval(2000);
  AboutDispatcher.fetchDescription.next();
}

export async function fetchItems() {
  await interval(3000);
  AboutDispatcher.fetchItems.next();
}
