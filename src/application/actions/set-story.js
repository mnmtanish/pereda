export const SET_STORY = 'SET_STORY';

export function setStory(id, text) {
  return {
    type: SET_STORY,
    data: { id, text },
  };
}
