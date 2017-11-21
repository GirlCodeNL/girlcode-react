import React, { Component, PropTypes } from 'react';
import TutorialStep from './tutorial-step';
import TutorialStepContent from './tutorial-step-content';

class Tutorial extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0,
    };
  }

  render() {
    // console.log(this.props.steps[this.state.currentStep].content);
    return (
      <div className="tutorial-page">
        <nav className="main-nav">
          <ul className="tutorial-steps">
            { this.props.steps.map(step => (
              <TutorialStep key={`step-${step.id}`} step={this.state.currentStep} />
            ))}
          </ul>
        </nav>
        <div className="step-content-wrap">
          <h2>{this.props.title}</h2>
          <TutorialStepContent content={this.props.steps[this.state.currentStep].content} />
        </div>
      </div>
    );
  }
}
Tutorial.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tutorial;
