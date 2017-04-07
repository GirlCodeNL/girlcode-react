import React, { Component, PropTypes } from 'react';
import TutorialStep from './tutorial-step';
import TutorialStepContent from './tutorial-step-content';

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
    // console.log(this.props.steps[this.state.currentStep].content);
    return (
      <div className="tutorial-page">
        <nav className="main-nav">
          <ul className="tutorial-steps">
            { this.props.steps.map((step, i) => <TutorialStep key={`step-${i}`} step={this.state.currentStep}  /> )}
          </ul>
        </nav>
        <div className="step-content-wrap">
          <TutorialStepContent content={this.props.steps[this.state.currentStep].content} />
        </div>
      </div>
    );
  }
}
