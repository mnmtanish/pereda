import { connect } from 'react-redux';
import { StoryTimeline } from './StoryTimeline.ui';

function mapState(state) {
  return { stories: state.stories };
}

export const UserStories = connect(mapState)(StoryTimeline);
