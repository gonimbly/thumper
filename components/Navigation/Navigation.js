/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Link from '../Link';

export default class extends Component {

  render() {
    return (
      <nav className='navbar navbar-dark bg-primary navbar-fixed-top'>
        <a className="navbar-brand" href="/">Thumper</a>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            <a className="nav-link" href="/" onClick={Link.handleClick}>Components</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" href="/messenger" onClick={Link.handleClick}>Messenger</a>
          </li>
        </ul>
      </nav>
    );
  }

}
