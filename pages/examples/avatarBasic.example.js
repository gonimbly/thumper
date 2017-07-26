import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import Jen from './img/Jen_final_mug_Square.jpg';
import Troy from './img/Troy_Final_Square.jpg';
const AvatarBasic = {};

AvatarBasic.title = 'Avatar Basic';

AvatarBasic.template = class extends Component {
  render() {
    return (
      <CodeCard id={'AvatarBasic'} title={AvatarBasic.title}>
        <div className="avatar-group">
          <img src={Troy} alt="Troy Conquer" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
          <img src={Jen} alt="Jen Igartua" className="avatar avatar-md"/>
        </div>
      </CodeCard>
    );
  }
};

export default AvatarBasic;