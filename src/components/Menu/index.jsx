/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Link from './Link';

class Menu extends Component {
  
  render() {
    const heading = this.props.title ? this.props.title : "";
    const direction = this.props.horizontal ? "nav-horizontal" : "";
    const classes = `${this.props.className} ${direction}`

    return (
      <Wrapper 
        className={classes}
        aria-label={this.props.menuId}
        id={this.props.menuId} 
      >
        { heading ? <h3>{heading}</h3> : '' }
        <ul>
        {
          this.props.items.map(function(item, i) {
            return (
              <li key={item.url}>
                <Link 
                  href={item.url} 
                  target={item.target} 
                  className="menu-item">
                    {item.label}
                </Link>
              </li>
            );
          })
        }
        </ul>
      </Wrapper>
    )
  }
}

Menu.defaultProps = {
  items: [],
  className: "navigation-menu",
  target: "_top",
  menuId: "menu"
};

Menu.propTypes = {
  items: PropTypes.any,
  className: PropTypes.any,
  title: PropTypes.string,
  horizontal: PropTypes.bool,
  id: PropTypes.string
};

export default Menu
