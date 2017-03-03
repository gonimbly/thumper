import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
const AvatarBasic = {};

AvatarBasic.title = 'Avatar Basic';

AvatarBasic.template = class extends Component {
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
      <CodeCard id={'AvatarBasic'} title={AvatarBasic.title}>
        <div className="avatar-group">
          <img src="img/Troy_Final_Square.jpg" alt="Troy Conquer" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
          <img src="img/Jen_final_mug_Square.jpg" alt="Jen Igartua" className="avatar avatar-md"/>
        </div>
      </CodeCard>
    );
  }
};

export default AvatarBasic;