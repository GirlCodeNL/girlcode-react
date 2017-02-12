import React, { Component, PropTypes } from 'react';

export default class SocialLink extends Component {
  static propTypes = {
    url: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
  };
  static defaultProps = { title: 'item1', url: 'nu.nl', img: 'logo.svg' };

  render() {
      return (
        <li><a href={this.props.url} title={this.props.title} target="_blank">
          <img role="presentation" className="social-button-footer icon" src={this.props.img} />
        </a>
      </li>
    );
  }
}
