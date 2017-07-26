import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import Jen from './img/Jen_final_mug_Square.jpg';
import Troy from './img/Troy_Final_Square.jpg';
const AvatarStatus = {};

AvatarStatus.title = 'Avatar Status';

AvatarStatus.template = class extends Component {
  render() {
    return (
      <CodeCard id={'AvatarStatus'} title={AvatarStatus.title}>
        <div className="avatar-group">
          <div className="avatar avatar-md avatar-status-active">
            <img src={Jen} alt="Jen Igartua"/>
          </div>
          <div className="avatar avatar-md avatar-status-inactive">
            <img src={Troy} alt="Troy Conquer"/>
          </div>
          <div className="avatar avatar-md avatar-status-new">
            <img src={Jen} alt="Jen Igartua"/>
          </div>
          <div className="avatar avatar-md avatar-placeholder fa"></div>
        </div>
      </CodeCard>
    );
  }
};

export default AvatarStatus;