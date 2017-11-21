/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-danger */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TutorialStep extends Component {
  render() {
    return (
      <li className={this.props.step ? 'active' : ''}>
        <button type="button" className="waves-effect waves-light btn">Tutorial step {this.props.step}</button>
      </li>
    );
  }
}
TutorialStep.propTypes = {
  step: PropTypes.number.isRequired,
};

export default TutorialStep;
