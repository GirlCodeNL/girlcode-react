import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
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
      this.setState({ subnavOpen });
    }
  }
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    subnav: PropTypes.array,
  };

  static defaultProps = { title: 'item1', url: 'nu.nl' };

  render() {
    let subnav = null;
    if (this.props.subnav) {
      subnav = <ul className={classnames('subnav', { expanded: this.state.subnavOpen })}>
        {this.props.subnav.map((item, i) =>
          <li key={`subnav-item-${i}`}>
            <Link className="waves-effect waves-light" to={item.url}>{item.title}</Link>
          </li>
        )}
      </ul>;
    }

    return (
      <li>
        <Link className={classnames('waves-effect', 'waves-light', {'has-subnav dropdown-button': this.props.subnav})} to={this.props.url} activeClassName="active" onClick={this.toggle}>
          {this.props.title}
        </Link>
        {subnav}
      </li>
    );
  }
}
