import React from 'react';
import { StoryItem } from './StoryItem.ui';

export const StoryTimeline = props => (
  <div className='story-list'>
    {props.stories.map(story => (
      <StoryItem key={story.id} story={story} />
    ))}
  </div>
);
