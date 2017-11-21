/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-danger */
import React, { Component } from 'react';

export default class Event extends Component {
  render() {
    return (
      <li>
        <figure>
          <img src={this.props.img} alt="" />
          <figcaption>{this.props.title}</figcaption>
        </figure>
        <p className="description" dangerouslySetInnerHTML={{ __html: this.props.description }} />
      </li>
    );
  }
}
