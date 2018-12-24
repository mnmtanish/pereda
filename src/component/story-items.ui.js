import './story-items.ui.css';
import React from 'react';
import { StoryItem } from './story-item.ui';

export const StoryItems = props => (
  <div className='story-items'>
    {props.stories.map(story => (
      <StoryItem key={story.date} story={story} onChange={props.onChange} />
    ))}
  </div>
);
