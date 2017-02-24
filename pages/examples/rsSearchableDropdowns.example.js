import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import { Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const RSSearchableDropdowns = {};

RSSearchableDropdowns.title = 'Reactstrap Searchable Dropdown';

RSSearchableDropdowns.template = class extends Component {
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
      <CodeCard id={'RSSearchableDropdowns'} title={RSSearchableDropdowns.title}>
        <Dropdown isOpen={this.state.primaryOpen} toggle={this.toggle.bind(this, 'primaryOpen')}>
          <DropdownToggle caret color="primary">
            Dropdown
          </DropdownToggle>
          <DropdownMenu className='dropdown-menu-form'>
            <DropdownItem header className='dropdown-item-form'>
              <Input type="email" name="email" id="exampleEmail" placeholder="Search…" />
            </DropdownItem>
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

export default RSSearchableDropdowns;