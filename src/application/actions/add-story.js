export const ADD_STORY = 'ADD_STORY';

export function addStory(id, text) {
  return {
    type: ADD_STORY,
    data: { id, text },
  };
}
