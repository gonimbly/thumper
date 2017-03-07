import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import { Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const RSSearchableDropdowns = {};

RSSearchableDropdowns.title = 'Reactstrap Searchable Dropdown';

RSSearchableDropdowns.template = class extends Component {
  render() {
    return (
      <CodeCard id={'RSSearchableDropdowns'} title={RSSearchableDropdowns.title}>
        <UncontrolledDropdown>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu className='dropdown-menu-form'>
            <div className='dropdown-item dropdown-item-form'>
              <Input tabIndex='0' type='email' name='email' id='exampleEmail' placeholder='Search…' />
            </div>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <br className='notcode' />
        <UncontrolledDropdown>
          <DropdownToggle caret className='btn btn-block'>
            Dropdown
          </DropdownToggle>
          <DropdownMenu className='dropdown-menu-form'>
            <div className='dropdown-item dropdown-item-form'>
              <Input tabIndex='0' type='email' name='email' id='exampleEmail' placeholder='Search…' />
            </div>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
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