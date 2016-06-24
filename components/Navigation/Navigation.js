/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import {Link} from 'react-router';

export default class extends Component {

  render() {
    return (
      <nav className='navbar navbar-dark bg-primary navbar-fixed-top'>
        <div className="container">
          <a className="navbar-brand" href="/">Thumper</a>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link className="nav-link" to="/">Components</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/messenger">Messenger</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}
