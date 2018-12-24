import React from 'react';

export const StoryItem = props => (
  <div className='story'>
    <pre>
      time: {props.story.time}
      text: {props.story.text}
    </pre>
  </div>
);
