/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import CodeCard from '../components/CodeCard/CodeCard';
import './index.scss';

export default class extends Component {
  render() {
    console.log('render');
    return (
      <div className='container'>
        <h1>Components</h1>
        <CodeCard id={'links'} title={'Links'}>
          <a href='#' className='btn btn-link btn-inline'>Link</a>
          <a href='#' className='btn btn-link btn-inline disabled'>Link disabled</a>
        </CodeCard>
        <CodeCard id={'basicButtons'} title={'Basic Buttons'}>
          <button type='button' className='btn btn-inline btn-default'>Default</button>
          <button type='button' className='btn btn-inline btn-primary'>Primary</button>
          <button type='button' className='btn btn-inline btn-secondary'>Secondary</button>
          <button type='button' className='btn btn-inline btn-success'>Success</button>
          <button type='button' className='btn btn-inline btn-info'>Info</button>
          <button type='button' className='btn btn-inline btn-warning'>Warning</button>
          <button type='button' className='btn btn-inline btn-danger'>Danger</button>
        </CodeCard>
        <CodeCard id={'outlineButtons'} title={'Outline Buttons'}>
          <button type='button' className='btn btn-inline btn-default-outline'>Default</button>
          <button type='button' className='btn btn-inline btn-primary-outline'>Primary</button>
          <button type='button' className='btn btn-inline btn-secondary-outline'>Secondary</button>
          <button type='button' className='btn btn-inline btn-success-outline'>Success</button>
          <button type='button' className='btn btn-inline btn-info-outline'>Info</button>
          <button type='button' className='btn btn-inline btn-warning-outline'>Warning</button>
          <button type='button' className='btn btn-inline btn-danger-outline'>Danger</button>
        </CodeCard>
        <CodeCard id={'navPills'} title={'Nav Pills'}>
            <ul className='nav nav-pills'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>All</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='#'>Recent</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Weakest</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Strongest</a>
              </li>
            </ul>
        </CodeCard>
        <CodeCard id={'dropdowns'} title={'Dropdowns'}>
          <div className='btn-group open'>
            <button type='button' className='btn btn-inline dropdown-toggle'>
              Action
            </button>
          </div>
          <div className='btn-group open'>
            <button type='button' className='btn btn-inline dropdown-toggle'>
              Action
            </button>
            <div className='dropdown-menu'>
              <a className='dropdown-item' href='#'>Action</a>
              <a className='dropdown-item' href='#'>Another action</a>
              <a className='dropdown-item' href='#'>Something else here</a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item' href='#'>Separated link</a>
            </div>
          </div>
          <br notcode />
          <br notcode />
          <br notcode />
          <br notcode />
          <br notcode />
          <br notcode />
          <br notcode />
        </CodeCard>
      </div>
    );
  }

}
