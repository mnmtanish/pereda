import * as orderBy from 'lodash/orderBy';
import { currentDate, equalDates } from '../../framework/datetime';

function migrateStories() {
  const version = localStorage.getItem('pereda@version') || 0;
  let newVersion = 0;
  if (version < 1) {
    for (const maybeId in localStorage) {
      if (maybeId.startsWith('pereda:')) {
        const id = maybeId.slice(7);
        const date = id.split('.').map(s => parseInt(s, 10));
        const text = localStorage.getItem(maybeId);
        localStorage.removeItem(maybeId);
        localStorage.setItem(`pereda:story:${id}`, JSON.stringify({ id, date, text }));
      }
    }
    newVersion = 1;
  }
  if (version !== newVersion) {
    localStorage.setItem('pereda@version', newVersion);
  }
}

export function loadStories() {
  migrateStories();
  const stories = [];
  for (const maybeId in localStorage) {
    if (maybeId.startsWith('pereda:story')) {
      stories.push(JSON.parse(localStorage.getItem(maybeId)));
    }
  }
  const currDate = currentDate();
  const currStory = { id: currDate.join('.'), date: currDate, text: '' };
  if (!stories.find(s => equalDates(s.date, currStory.date))) {
    stories.unshift(currStory);
  }
  return orderBy(stories, ['id'], ['desc']);
}

export function storeStories(stories) {
  for (const story of stories) {
    localStorage.setItem(`pereda:story:${story.id}`, story.text);
  }
}
