import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const RSDropdowns = {};

RSDropdowns.title = 'Reactstrap Dropdown';

RSDropdowns.template = class extends Component {
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
      <CodeCard id={'RSDropdowns'} title={RSDropdowns.title}>
        <Dropdown isOpen={this.state.primaryOpen} toggle={this.toggle.bind(this, 'primaryOpen')}>
          <DropdownToggle caret color="primary">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br className='notcode' />
        <Dropdown isOpen={this.state.secondaryOpen} toggle={this.toggle.bind(this, 'secondaryOpen')}>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
      </CodeCard>
    );
  }
};

export default RSDropdowns;