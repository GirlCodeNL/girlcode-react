import React, { Component, PropTypes } from 'react';
import TutorialStep from './tutorial-step';

export default class Tutorial extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0,
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="main-nav">
        <ul className="tutorial-steps">
          { this.props.steps.map((step, i) => <TutorialStep key={`step-${i}`} step={this.state.currentStep} data={this.props.steps[this.state.currentStep]}  /> )}
        </ul>
      </nav>
    );
  }
}
