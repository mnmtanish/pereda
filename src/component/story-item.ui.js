import './story-item.ui.css';
import React from 'react';
import { isCurrentDate, formatDate } from '../framework/datetime';
import { StoryInfo } from './story-info.ui';
import { StoryText } from './story-text.ui';

export const StoryItem = props => (
  <div className={StoryItem.getClassName(props.story.date)}>
    <StoryInfo date={StoryItem.formatDate(props.story.date)} />
    <StoryText text={props.story.text} onChange={text => props.onChange(props.story.id, text)} />
  </div>
);

StoryItem.getClassName = date => {
  if (isCurrentDate(date)) {
    return 'story-item story-item-current';
  } else {
    return 'story-item';
  }
};

StoryItem.formatDate = date => {
  if (!date || isCurrentDate(date)) {
    return 'TODAY';
  }
  return formatDate(date);
};
