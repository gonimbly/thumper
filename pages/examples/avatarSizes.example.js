import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
const AvatarSizes = {};

AvatarSizes.title = 'Avatar Sizes';

AvatarSizes.template = class extends Component {
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
      <CodeCard id={'AvatarSizes'} title={AvatarSizes.title}>
        <div className="avatar-group">
          <div className="avatar avatar-sm">
            <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua"/>
          </div>
          <div className="avatar avatar-md">
            <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua"/>
          </div>
          <div className="avatar avatar-lg">
            <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua"/>
          </div>
        </div>
      </CodeCard>
    );
  }
};

export default AvatarSizes;