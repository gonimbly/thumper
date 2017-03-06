import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const RSDropdowns = {};

RSDropdowns.title = 'Reactstrap Dropdown';

RSDropdowns.template = class extends Component {
  render() {
    return (
      <CodeCard id={'RSDropdowns'} title={RSDropdowns.title}>
        <UncontrolledDropdown>
          <DropdownToggle caret color="primary">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <br className='notcode' />
        <UncontrolledDropdown>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu right>
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

export default RSDropdowns;