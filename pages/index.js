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
        <div className="card">
          <div className="card-block">
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
            <CodeCard id={'buttonSizes'} title={'Buttons Sizes'}>
              <button type='button' className='btn btn-inline btn-primary btn-sm'>Small</button>
              <button type='button' className='btn btn-inline btn-primary btn-md'>Regular</button>
              <button type='button' className='btn btn-inline btn-primary btn-lg'>Large</button>
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
            <CodeCard id={'messages'} title={'Messages'}>
              <div className='msg-container' style={{maxHeight: '300px'}}>
                <div className='msg msg-inbound'>Hey how are you?</div>
                <div className='msg msg-outbound'>Great! Hows portland?</div>
                <div className='msg msg-inbound'>I put a bird on it with my cold-pressed juice. Just got a ethical fingerstache tote bag, seitan meggings, selvage chartreuse and cray next-level biodiesel.</div>
                <div className='msg msg-outbound'>I put a bird on it with my cold-pressed juice. Just got a ethical fingerstache tote bag, seitan meggings, selvage chartreuse and cray next-level biodiesel.</div>
                <div className='msg msg-inbound'>I put a bird on it with my cold-pressed juice. Just got a ethical fingerstache tote bag, seitan meggings, selvage chartreuse and cray next-level biodiesel.</div>
              </div>
            </CodeCard>
            <CodeCard id={'cards'} title={'Cards'}>
              <div className="row">
                <div className="col-sm-6">
                  <div className='card text-xs-center'>
                    <div className='card-block'>
                      <h4 className="card-title">card</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className='card card-inverse card-primary text-xs-center'>
                    <div className='card-block'>
                      <h4 className="card-title">card card-inverse card-primary</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className='card card-warning text-xs-center'>
                    <div className='card-block'>
                      <h4 className="card-title">card card-warning</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className='card card-inverse card-secondary text-xs-center'>
                    <div className='card-block'>
                      <h4 className="card-title">card card-inverse card-secondary</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className='card card-inverse card-info text-xs-center'>
                    <div className='card-block'>
                      <h4 className="card-title">card card-inverse card-info</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className='card card-inverse card-danger text-xs-center'>
                    <div className='card-block'>
                      <h4 className="card-title">card card-inverse card-danger</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </CodeCard>
          </div>
        </div>
      </div>
    );
  }

}
