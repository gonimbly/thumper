/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Navbar toggleable fixed='top' className='bg-primary'>
        <div className="container">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href='/'>Thumper</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink to='/' activeClassName="active" tag={IndexLink}>Basics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/forms' activeClassName="active" tag={Link}>Forms</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/communication' activeClassName="active" tag={Link}>Communication</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/navs' activeClassName="active" tag={Link}>Navs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/tables' activeClassName="active" tag={Link}>Tables</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/social' activeClassName="active" tag={Link}>Social</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/reactstrap' activeClassName="active" tag={Link}>Reactstrap</NavLink>
              </NavItem>
              <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                  Examples
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem><NavLink to='/messenger' activeClassName="active" tag={Link}>Messenger</NavLink></DropdownItem>
                  <DropdownItem><NavLink to='/table-form' activeClassName="active" tag={Link}>Table Form</NavLink></DropdownItem>
                </DropdownMenu>
              </NavDropdown>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }

}

export default Navigation;