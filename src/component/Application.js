import './application.css';
import React from 'react';
import { connect } from 'react-redux';
import { addStory } from '../application/actions/add-story';
import { StoryItems } from './story-items.ui';

function mapState(state) {
  return { stories: state.stories };
}

function mapDispatch(dispatch) {
  return { onChange: (date, text) => dispatch(addStory(date, text))};
}

export const Application = connect(mapState, mapDispatch)(props => (
  <div className='container'>
    <StoryItems stories={props.stories} onChange={props.onChange} />
  </div>
));
