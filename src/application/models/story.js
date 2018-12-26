import * as orderBy from 'lodash/orderBy';
import { currentDate, equalDates } from '../../framework/datetime';

export function loadStories() {
  const stories = [];
  for (const maybeId in localStorage) {
    if (maybeId.startsWith('pereda:')) {
      const id = maybeId.slice(7);
      const date = id.split('.').map(s => parseInt(s, 10));
      const text = localStorage.getItem(maybeId);
      stories.push({ id, date, text });
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
    localStorage.setItem(`pereda:${story.id}`, story.text);
  }
}
