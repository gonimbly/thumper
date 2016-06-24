/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import _times from 'lodash/times';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: 3,
      chatLength: 1
    };
  }
  increateUserCount() {
    this.setState({
      userCount: this.state.userCount + 5
    });
  }
  increaseChatLength() {
    this.setState({
      chatLength: this.state.chatLength + 5
    });
  }
  render() {
    let users = [
      'Elana Ragon',
      'Jacqulyn Niel',
      'Tangela Vazguez',
      'Claretta Crail',
      'Akiko Schleifer',
      'Jani Ridgway',
      'Annemarie Trader',
      'Lindsy Craycraft',
      'Tamesha Dykstra',
      'Sylvia Catalan'
    ];
    let menuItems = _times(this.state.userCount, (n) => {
      return (
        <li className='nav-item' key={n}>
          <a className='nav-link'>
            <strong>{users[n % users.length]}</strong><br />
            Fri. May 6th 7pm
          </a>
        </li>
      );
    });
    let leosThoughts = [
      'Why are you bothering me?',
      'sure!',
      'haha',
      'you are hilarious',
      'facepalm',
      'i hate you now',
      'whats the point of this charade',
      '😴',
      '🖕🏿'
    ];
    let yourThoughts = [
      'Want to hear some new jokes?',
      'How do you know when you are going to drown in milk? When its past your eyes!',
      'Our wedding was so beautiful, even the cake was in tiers.',
      'Did you hear about the new restaurant on the moon? The food is great, but there’s just no atmosphere.',
      'What did the mountain climber name his son? Cliff.'
    ];
    let chats = _times(this.state.chatLength, (n) => {
      let randomN = Math.round((Math.random() * 10) * n);
      if(n % 3) {
        return [
          (<div className='msg-user msg-inbound' key={n + 'user'}>Leo</div>),
          (<div className='msg msg-inbound' key={n + 'msg'}>{leosThoughts[randomN % leosThoughts.length]}</div>)
        ];
      } else {
        return [
          (<div className='msg-user msg-outbound' key={n + 'user'}>You</div>),
          (<div className='msg msg-outbound' key={n + 'msg'}>{yourThoughts[randomN % yourThoughts.length]}</div>)
        ];
      }
    });
    return (
      <div className='app-container'>
        <div className='container container-flex'>
          <h1>My Work</h1>
          <div className='card card-flex'>
            <div className='row'>
              <div className='col-sm-5 col-md-3 card-left-panel bg-secondary'>
                <div className='card-panel-block'>
                  <ul className='nav nav-pills nav-stacked' onClick={this.increateUserCount.bind(this)}>
                    <li className='nav-item'>
                      <a href='' className='nav-link active'>
                        <strong>Leo Lion</strong><br />
                        Fri. May 6th 7pm
                      </a>
                    </li>
                    {menuItems}
                  </ul>
                </div>
                <div className='card-panel-footer'>
                  <button className='btn btn-danger btn-block'><i className='fa fa-refresh fa-lg'></i>RESET</button>
                </div>
              </div>
              <div className='col-sm-7 col-md-9 col-flex'>
                <div className='msg-block card-block'>
                  <div className='card' style={{marginBottom: 0}}>
                    <div className='card-block'>
                      <div className='row'>
                        <div className='col-sm-6 col-md-4'>
                            <p>
                              <strong>Name</strong><br />
                              Leo Lion
                            </p>
                        </div>
                        <div className='col-sm-6 col-md-4'>
                            <p>
                              <strong>Date</strong><br />
                              Friday, May 6th
                            </p>
                        </div>
                        <div className='col-sm-6 col-md-4'>
                            <p>
                              <strong>Type</strong><br />
                              Filling
                            </p>
                        </div>
                        <div className='col-sm-6 col-md-4'>
                            <p>
                              <strong>Doctor</strong><br />
                              Dr. Lewis
                            </p>
                        </div>
                        <div className='col-sm-6 col-md-4'>
                            <p>
                              <strong>Time</strong><br />
                              7:42 PM
                            </p>
                        </div>
                        <div className='col-sm-6 col-md-4'>
                            <p>
                              <strong>Phone</strong><br />
                              18324645364
                            </p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-sm-12 col-md-4'>
                            <button type='button' className='btn btn-danger-outline btn-block'>
                              <i className='fa fa-times fa-lg'></i>
                              Cancelled
                            </button>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <button type='button' className='btn btn-secondary-outline btn-block'>
                              <i className='fa fa-calendar fa-lg'></i>
                              Rescheduled
                            </button>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <button type='button' className='btn btn-primary-outline btn-block'>
                              <i className='fa fa-check fa-lg'></i>
                              Confirmed
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='msg-container'>
                    <div className='msg-content' onClick={this.increaseChatLength.bind(this)}>
                      {chats}
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
