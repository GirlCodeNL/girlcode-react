import React, { Component, PropTypes } from 'react';

export default class TutorialStep extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };
  render() {
    return (
      <li className={this.props.step ? 'active' : ''}>
        <button type="button" className="waves-effect waves-light btn">Tutorial step {this.props.data.content}</button>
      </li>
    );
  }
}
