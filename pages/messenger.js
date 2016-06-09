/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div style={{paddingTop: '54px'}}>
        <nav className='navbar navbar-dark bg-secondary navbar-full'>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Dashboard</a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>My Work <span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Lists</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Settings</a>
            </li>
          </ul>
        </nav>
        <div className='container'>
          <h1>My Work</h1>
          <div className='card'>
            <div className='row'>
              <div className='col-xs-3 col-sm-3 card-left-panel bg-secondary'>
                <div className='card-panel-block'>
                  <ul className='nav nav-pills nav-stacked'>
                      <li className='nav-item'>
                        <a href='' className='nav-link active'>
                          <strong>Leo Lion</strong><br />
                          Fri. May 6th 7pm
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='' className='nav-link'>
                          <strong>Tony Tiger</strong><br />
                          Sat. May 7th 10pm
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='' className='nav-link'>
                          <strong>Tubby Tabby</strong><br />
                          Sun. May 8th 11pm
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a href='' className='nav-link'>
                          <strong>Winnie Pooh</strong><br />
                          Wed. May 11th 3pm
                        </a>
                      </li>
                  </ul>
                </div>
                <div className='card-panel-footer'>
                  <button className='btn btn-danger btn-block'><i className="fa fa-refresh fa-lg"></i>RESET</button>
                </div>
              </div>
              <div className='col-xs-9 col-sm-9'>
                <div className='msg-block card-block'>
                  <div className='card' style={{marginBottom: 0}}>
                    <div className='card-block'>
                      <div className='row'>
                        <div className='col-xs-4'>
                            <p>
                              <strong>Name</strong><br />
                              Leo Lion
                            </p>
                        </div>
                        <div className='col-xs-4'>
                            <p>
                              <strong>Date</strong><br />
                              Friday, May 6th
                            </p>
                        </div>
                        <div className='col-xs-4'>
                            <p>
                              <strong>Type</strong><br />
                              Filling
                            </p>
                        </div>
                        <div className='col-xs-4'>
                            <p>
                              <strong>Doctor</strong><br />
                              Dr. Lewis
                            </p>
                        </div>
                        <div className='col-xs-4'>
                            <p>
                              <strong>Time</strong><br />
                              7:42 PM
                            </p>
                        </div>
                        <div className='col-xs-4'>
                            <p>
                              <strong>Phone</strong><br />
                              18324645364
                            </p>
                        </div>
                        <div className='col-xs-4'>
                            <button type='button' className='btn btn-danger-outline btn-block'>
                              <i className="fa fa-times fa-lg"></i>
                              Cancelled
                            </button>
                        </div>
                        <div className='col-xs-4'>
                            <button type='button' className='btn btn-secondary-outline btn-block'>
                              <i className="fa fa-calendar fa-lg"></i>
                              Rescheduled
                            </button>
                        </div>
                        <div className='col-xs-4'>
                            <button type='button' className='btn btn-primary-outline btn-block'>
                              <i className="fa fa-check fa-lg"></i>
                              Confirmed
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='msg-container' style={{maxHeight: '500px'}}>
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
                <div className='card-footer msg-footer'>
                  <form className='input-group'>
                    <input type='text' className='form-control' placeholder='Enter Message'/>
                    <span className='input-group-btn'><button type='submit' className='btn btn-link'>Send</button></span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
