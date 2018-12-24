import './story-text.ui.css';
import React, { PureComponent } from 'react';
import * as autosize from 'autosize';

export class StoryText extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { text: props.text || '' };
    this.emit = this.emit.bind(this);
    this.textarea = React.createRef();
  }

  componentDidMount() {
    autosize(this.textarea.current);
  }

  componentWillReceiveProps(props) {
    if (this.state.text !== props.text) {
      this.setState({ text: props.text });
    }
  }

  emit(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <textarea
        ref={this.textarea}
        className='story-text'
        placeholder='What happened today?'
        value={this.state.text}
        onChange={this.emit}
      />
    );
  }
}
