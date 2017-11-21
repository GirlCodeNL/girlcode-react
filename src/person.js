/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-danger */
import React, { Component } from 'react';

export default class Person extends Component {
  render() {
    return (
      <section id={this.props.name} className="bio">
        <h3>{this.props.name}</h3>
        <figure>
          <img src={this.props.img} alt="" />
          <figcaption>This is {this.props.name}</figcaption>
        </figure>
        <p dangerouslySetInnerHTML={{ __html: this.props.content }} />
        <blockquote cite={this.props.quoteSrc}>{this.props.quote}</blockquote>
      </section>
    );
  }
}
