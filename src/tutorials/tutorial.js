import React, { Component, PropTypes } from 'react';


export default class Tutorial extends Component {
  constructor() {
    this.state = {
      currentStep: 0,
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <TutorialStep data={this.props.steps[this.state.currentStep]} />
      </div>
    );
  }
}
