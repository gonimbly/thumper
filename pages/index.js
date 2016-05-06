/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div className='container'>
        <h1>Components</h1>
        <div className='card' id='buttons'>
          <div className='card-block'>
            <h2>Buttons</h2>
          </div>
          <div className='card-block'>
            <button type='button' className='btn btn-primary'>Primary</button>
            <button type='button' className='btn btn-secondary'>Secondary</button>
            <button type='button' className='btn btn-success'>Success</button>
            <button type='button' className='btn btn-info'>Info</button>
            <button type='button' className='btn btn-warning'>Warning</button>
            <button type='button' className='btn btn-danger'>Danger</button>
            <button type='button' className='btn btn-link'>Link</button>
          </div>
        </div>
        <div className='card' id='outlineButtons'>
          <div className='card-block'>
            <h2>Outline Buttons</h2>
          </div>
          <div className='card-block'>
            <button type='button' className='btn btn-primary-outline'>Primary</button>
            <button type='button' className='btn btn-secondary-outline'>Secondary</button>
            <button type='button' className='btn btn-success-outline'>Success</button>
            <button type='button' className='btn btn-info-outline'>Info</button>
            <button type='button' className='btn btn-warning-outline'>Warning</button>
            <button type='button' className='btn btn-danger-outline'>Danger</button>
          </div>
        </div>
      </div>
    );
  }

}
