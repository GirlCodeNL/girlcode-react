/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-danger */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink, Link } from 'react-router-dom';

class NavItem extends Component {
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
    };
  }

  render() {
    const navWithSubnav = this.props.subnav ? (
      <li>
        <NavLink
          exact
          to={this.props.url}
          activeClassName="active"
          onClick={this.toggle}
          className={classnames('waves-effect', 'waves-light', { 'has-subnav dropdown-button': this.props.subnav })}
        >
          {this.props.title}
        </NavLink>
        <ul className={classnames('subnav', { expanded: this.state.subnavOpen })}>
          {this.props.subnav.map(item => (
            <li key={`subnav-item-${item.id}`}>
              <Link className="waves-effect waves-light" to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </li>
    ) : null;
    return (
      this.props.subnav ? navWithSubnav : (
        <li>
          <NavLink
            exact
            className={classnames('waves-effect', 'waves-light')}
            to={this.props.url}
            activeClassName="active"
          >
            {this.props.title}
          </NavLink>
        </li>
      )
    );
  }
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subnav: PropTypes.arrayOf(PropTypes.object),
};

NavItem.defaultProps = {
  subnav: null,
};

export default NavItem;
