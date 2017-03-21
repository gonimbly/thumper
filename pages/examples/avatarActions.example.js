import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import Jen from './img/Jen_final_mug_Square.jpg';
const AvatarActions = {};

AvatarActions.title = 'Avatar Actions';

AvatarActions.template = class extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      primaryOpen: false,
      secondaryOpen: false
    };
  }

  toggle(key) {
    var newValue = {};
    newValue[key] = !this.state[key];
    this.setState(newValue);
  }

  render() {
    return (
      <CodeCard id={'AvatarActions'} title={AvatarActions.title}>
        <div className='avatar-group'>
          <div className='avatar avatar-md avatar-action-dark avatar-action-plus'>
            <img src={Jen} alt='Jen Igartua'/>
          </div>
          <div className='avatar avatar-md avatar-action-light avatar-action-search'>
            <img src={Jen} alt='Jen Igartua'/>
          </div>
          <div className='avatar avatar-md avatar-action-dark avatar-action-times'>
            <img src={Jen} alt='Jen Igartua'/>
          </div>
        </div>
      </CodeCard>
    );
  }
};

export default AvatarActions;