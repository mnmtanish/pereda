import { produce } from 'immer';
import { createStore } from 'redux';
import { ADD_STORY } from './actions/add-story';

export const create = config => {
  const initial = {
    name: config.APP_NAME,
    stories: [],
  };
  const reducer = (draft, action) => {
    if (action.type === ADD_STORY) {
      draft.stories.unshift(action.data);
    }
  };
  return createStore(produce(reducer, initial));
};
