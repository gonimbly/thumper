/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import CodeCard from '../components/CodeCard/CodeCard';
import './home.scss';

export default class extends Component {
  render() {
    console.log('render');
    return (
      <div className='container'>
        <h1>Components</h1>
        <div className='card'>
          <div className='card-block'>
            <CodeCard id={'headers'} title={'Headers'}>
              <h1>H1 Header</h1>
              <h2>H2 Header</h2>
              <h3>H3 Header</h3>
            </CodeCard>
            <CodeCard id={'grid'} title={'Grid'}>
              <p className='notcode'>Bootstrap has a 12 column grid, we usually setup columns to become rows on mobile devices</p>
              <div className='row'>
                <div className="col-xs-12 col-md-1 bg-primary">1</div>
                <div className="col-xs-12 col-md-1 bg-primary-light">2</div>
                <div className="col-xs-12 col-md-1 bg-primary">3</div>
                <div className="col-xs-12 col-md-1 bg-primary-light">4</div>
                <div className="col-xs-12 col-md-1 bg-primary">5</div>
                <div className="col-xs-12 col-md-1 bg-primary-light">6</div>
                <div className="col-xs-12 col-md-1 bg-primary">7</div>
                <div className="col-xs-12 col-md-1 bg-primary-light">8</div>
                <div className="col-xs-12 col-md-1 bg-primary">9</div>
                <div className="col-xs-12 col-md-1 bg-primary-light">10</div>
                <div className="col-xs-12 col-md-1 bg-primary">11</div>
                <div className="col-xs-12 col-md-1 bg-primary-light">12</div>
              </div>
              <br className='notcode' />
              <p className='notcode'>50/50 grid</p>
              <div className='row'>
                <div className='col-xs-12 col-md-6 bg-primary'>
                  <p>col-xs-12 col-md-6 bg-primary</p>
                </div>
                <div className='col-xs-12 col-md-6 bg-primary-light'>
                  <p>col-xs-12 col-md-6 bg-primary-light</p>
                </div>
              </div>
              <br className='notcode' />
              <p className='notcode'>You can mix and match any way.</p>
              <div className='row'>
                <div className='col-xs-12 col-md-6 bg-primary'>
                  <p>col-xs-12 col-md-6 bg-primary</p>
                </div>
                <div className='col-xs-12 col-md-4 bg-primary-light'>
                  <p>col-xs-12 col-md-4 bg-primary-light</p>
                </div>
                <div className='col-xs-12 col-md-2 bg-primary'>
                  <p>col-xs-12 col-md-2 bg-primary</p>
                </div>
              </div>
              <br className='notcode' />
              <p className='notcode'>You can offset columns to center them, this one collapses down to full width at smaller sizes.</p>
              <div className='row'>
                <div className='col-xs-12 col-md-offset-3 col-md-6 bg-primary-light'>
                  <p>col-xs-12 col-md-offset-3 col-md-6 bg-primary-light</p>
                </div>
              </div>
            </CodeCard>
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
              <br className='notcode' />
              <br className='notcode' />
              <br className='notcode' />
              <br className='notcode' />
              <br className='notcode' />
              <br className='notcode' />
              <br className='notcode' />
            </CodeCard>
            <CodeCard id={'messages'} title={'Messages'}>
              <div className='msg-block card-block'>
                <div className='msg-container' style={{minHeight: '300px'}}>
                  <div className='msg-content'>
                    <div className='msg-user msg-inbound'>Leo</div>
                    <div className='msg msg-inbound'>
                      Hey how are you?
                    </div>
                    <div className='msg-user msg-outbound'>You</div>
                    <div className='msg msg-outbound'>
                      Great! Hows portland?
                    </div>
                    <div className='msg-user msg-inbound'>Leo</div>
                    <div className='msg msg-inbound'>
                      I Put a bird on it with my cold-pressed juice. Just got a ethical fingerstache tote bag, seitan meggings, selvage chartreuse and cray next-level biodiesel.
                    </div>
                    <div className='msg-user msg-outbound'>You</div>
                    <div className='msg msg-outbound'>
                      I put a bird on it with my cold-pressed juice. Just got a ethical fingerstache tote bag, seitan meggings, selvage chartreuse and cray next-level biodiesel.
                    </div>
                    <div className='msg-user msg-outbound'>You</div>
                    <div className='msg msg-outbound'>
                      I put a bird on it with my cold-pressed juice. Just got a ethical fingerstache tote bag, seitan meggings, selvage chartreuse and cray next-level biodiesel.
                    </div>
                  </div>
                </div>
              </div>
            </CodeCard>
            <CodeCard id={'cards'} title={'Cards'}>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='card text-xs-center'>
                    <div className='card-block'>
                      <h4 className='card-title'>card</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className='card card-inverse card-primary text-xs-center'>
                    <div className='card-block'>
                      <h4 className='card-title'>card card-inverse card-primary</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className='card card-warning text-xs-center'>
                    <div className='card-block'>
                      <h4 className='card-title'>card card-warning</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='card card-inverse card-secondary text-xs-center'>
                    <div className='card-block'>
                      <h4 className='card-title'>card card-inverse card-secondary</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className='card card-inverse card-info text-xs-center'>
                    <div className='card-block'>
                      <h4 className='card-title'>card card-inverse card-info</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className='card card-inverse card-danger text-xs-center'>
                    <div className='card-block'>
                      <h4 className='card-title'>card card-inverse card-danger</h4>
                      <blockquote className='card-blockquote'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </CodeCard>
            <CodeCard id={'inputs'} title={'inputs'}>
              <form>
                <fieldset className='form-group'>
                  <label htmlFor='name'>Name of Business</label>
                  <input type='text' className='form-control' id='name' />
                </fieldset>
                <fieldset className='form-group'>
                  <label htmlFor='confirm'>Initial Confirmation</label>
                  <div className='input-group'>
                    <input type='number' className='form-control' />
                    <span className='input-group-addon'>Days</span>
                  </div>
                  <small className='text-muted'>Number of days before appointment date.</small>
                </fieldset>
                <fieldset className='form-group'>
                  <label htmlFor='confirm'>Reminder</label>
                  <div className='input-group'>
                    <input type='number' className='form-control' />
                    <span className='input-group-addon'>Days</span>
                  </div>
                  <small className='text-muted'>Number of days after initial confirmation.</small>
                </fieldset>
              </form>
            </CodeCard>
          </div>
        </div>
      </div>
    );
  }

}
