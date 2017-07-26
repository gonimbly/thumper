import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import Jen from './img/Jen_final_mug_Square.jpg';
import Troy from './img/Troy_Final_Square.jpg';
const AvatarSizes = {};

AvatarSizes.title = 'Avatar Sizes';

AvatarSizes.template = class extends Component {
  render() {
    return (
      <CodeCard id={'AvatarSizes'} title={AvatarSizes.title}>
        <div className="avatar-group">
          <div className="avatar avatar-sm">
            <img src={Jen} alt="Jen Igartua"/>
          </div>
          <div className="avatar avatar-md">
            <img src={Troy} alt="Troy Conquer"/>
          </div>
          <div className="avatar avatar-lg">
            <img src={Jen} alt="Jen Igartua"/>
          </div>
        </div>
      </CodeCard>
    );
  }
};

export default AvatarSizes;