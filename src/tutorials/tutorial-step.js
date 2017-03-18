import React, { Component, PropTypes } from 'react';

export default class TutorialStep extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };
  render() {
    return (
      <li>
        Tutorial step {this.props.data.content}
      </li>
    );
  }
}
