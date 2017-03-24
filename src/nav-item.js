import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subnavOpen: false,
    };
    let subnavOpen = false;
    this.toggle = (e) => {
      e.preventDefault();
      subnavOpen = !subnavOpen;
      this.setState({subnavOpen: subnavOpen});
    }
  }
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    subnav: PropTypes.array,
  };

  static defaultProps = { title: 'item1', url: 'nu.nl' };

  render() {
    let subnav = '';
    if (this.props.subnav) {
      const className = this.state.subnavOpen ? 'expanded' : '';
      subnav = <ul className={`subnav ${className}`}>
        {this.props.subnav.map((item, i) =>
          <li key={`subnav-item-${i}`}>
            <Link className="waves-effect waves-light" to={item.url}>{item.title}</Link>
          </li>
        )}
      </ul>;
    }

    return (
      <li>
        <Link className={`waves-effect waves-light ${this.props.subnav ? 'has-subnav dropdown-button' : ''}`} to={this.props.url} activeClassName="active" onClick={this.toggle}>
          {this.props.title}
        </Link>
        {subnav}
      </li>
    );
  }
}
