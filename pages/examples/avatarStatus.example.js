import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
const AvatarStatus = {};

AvatarStatus.title = 'Avatar Status';

AvatarStatus.template = class extends Component {
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
      <CodeCard id={'AvatarStatus'} title={AvatarStatus.title}>
        <div className="avatar-group">
          <div className="avatar avatar-md avatar-status-active">
            <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua"/>
          </div>
          <div className="avatar avatar-md avatar-status-inactive">
            <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua"/>
          </div>
          <div className="avatar avatar-md avatar-status-new">
            <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua"/>
          </div>
          <div className="avatar avatar-md avatar-placeholder fa"></div>
        </div>
      </CodeCard>
    );
  }
};

export default AvatarStatus;