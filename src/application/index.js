import { produce } from 'immer';
import { createStore } from 'redux';
import { SET_STORY } from './actions/set-story';
import { loadStories, storeStories } from './models/story';

export const create = config => {
  const initial = { stories: loadStories() };
  const reducer = (draft, action) => {
    if (action.type === SET_STORY) {
      const story = draft.stories.find(s => s.id === action.data.id);
      story.text = action.data.text;
      storeStories([story]);
    }
  };
  return createStore(produce(reducer, initial));
};
