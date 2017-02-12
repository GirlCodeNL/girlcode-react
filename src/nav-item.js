import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
  };

  static defaultProps = { title: 'item1', url: 'nu.nl' };

  render() {
    return (
      <li>
        <Link className="waves-effect waves-light" to={this.props.url} activeClassName="active">{this.props.title}</Link>
      </li>
    );
  }
}
