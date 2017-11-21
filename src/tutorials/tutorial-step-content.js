/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-danger */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

class TutorialStepContent extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this.createMarkup = () => ({ __html: this.state.content });
  }

  componentDidMount() {
    fetch(this.props.content)
      .then(response => response.text())
      .then(markdown => this.setState({ content: marked.parse(markdown) }));
  }

  render() {
    return (
      <div className="tutorial-step-content" dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
}

TutorialStepContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TutorialStepContent;
