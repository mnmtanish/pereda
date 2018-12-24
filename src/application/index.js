import { produce } from 'immer';
import { createStore } from 'redux';
import { ADD_STORY } from './actions/add-story';

export const create = config => {
  const initial = {
    name: config.APP_NAME,
    stories: [
      {
        id: '2018.12.26',
        date: [2018, 12, 26],
        text: '',
      },
      {
        id: '2018.12.25',
        date: [2018, 12, 25],
        text:
          'User keeps track of what he has done. When they come back to work the next day they can quickly remember what they have been working on the previous day. User keeps track of what he has done on a week. When they come back to work on Monday they can quickly remember what they have been working on the previous week.',
      },
      {
        id: '2018.12.24',
        date: [2018, 12, 24],
        text:
          'User keeps track of what he has done before going on vacation. When they come back to work they can quickly remember what they have been working on before they left.',
      },
    ],
  };
  const reducer = (draft, action) => {
    if (action.type === ADD_STORY) {
      const story = draft.stories.find(s => s.id === action.data.id);
      story.text = action.data.text;
    }
  };
  return createStore(produce(reducer, initial));
};
