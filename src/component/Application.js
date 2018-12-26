import './application.css';
import React from 'react';
import { connect } from 'react-redux';
import { setStory } from '../application/actions/set-story';
import { StoryItems } from './story-items.ui';

function mapState(state) {
  return { stories: state.stories };
}

function mapDispatch(dispatch) {
  return { onChange: (id, text) => dispatch(setStory(id, text)) };
}

export const Application = connect(
  mapState,
  mapDispatch,
)(props => (
  <div className='container'>
    <StoryItems stories={props.stories} onChange={props.onChange} />
  </div>
));
