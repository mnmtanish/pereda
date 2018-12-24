import { randomId } from '../../framework/random';

export const ADD_STORY = 'ADD_STORY';

export function addStory(time, text) {
  return {
    type: ADD_STORY,
    data: { id: randomId(), time, text },
  };
}
