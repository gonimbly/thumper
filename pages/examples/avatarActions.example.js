import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
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
        <div className="avatar-group">
          <div className="avatar avatar-md avatar-action-dark avatar-action-plus">
            <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua"/>
          </div>
          <div className="avatar avatar-md avatar-action-light avatar-action-search">
            <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua"/>
          </div>
          <div className="avatar avatar-md avatar-action-dark avatar-action-times">
            <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua"/>
          </div>
        </div>
      </CodeCard>
    );
  }
};

export default AvatarActions;