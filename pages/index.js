/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div>
        <h1>Components</h1>
        <div className='card'>
          <div className='card-block'>
            <h2>Button</h2>
          </div>
          <button className='btn btn-success'>Click Me!</button>
          <div className='card-block'>
          </div>
        </div>
      </div>
    );
  }

}
