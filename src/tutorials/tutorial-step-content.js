import React, { Component, PropTypes } from 'react';
import marked from 'marked';

export default class TutorialStepContent extends Component {

  constructor() {
    super();
    this.state = { content: '' };
  }

  componentDidMount() {
    fetch(this.props.content)
      .then(response => response.text())
      .then(markdown => this.setState({ content: marked.parse(markdown) }));
  }

  static propTypes = {
    content: PropTypes.string.isRequired,
  };

  createMarkup = () => {
    return {__html: this.state.content };
  }

  render() {
    return (
      <div className="tutorial-step-content" dangerouslySetInnerHTML={ this.createMarkup() }></div>
    );
  }
}
