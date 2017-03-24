import React, { Component, PropTypes } from 'react';
import marked from 'marked';

export default class TutorialStepContent extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  };

  createMarkup = () => {
    return {__html: marked(this.props.content) };
  }

  render() {
    return (
      <div className="tutorial-step-content" dangerouslySetInnerHTML={ this.createMarkup() }></div>
    );
  }
}
