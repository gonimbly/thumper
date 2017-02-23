import React, { Component } from 'react';
import _map from 'lodash/map';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SORT = {
  ASC: 'asc',
  DESC: 'desc',
  DEFAULT: 'asc'
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortColumn: null,
      sortDirection: SORT.ASC,
      menuHover: false,
      leftMenuOpen: false,
      rightMenuOpen: true
    };
  }
  onClickHeader(columnName) {
    let newState = {};
    if(this.state.sortColumn === columnName) {
      // already sorting by this column, just flip direction
      newState.sortDirection = this.state.sortDirection === SORT.ASC ? SORT.DESC : SORT.ASC;
    } else {
      newState.sortColumn = columnName;
      newState.sortDirection = SORT.DEFAULT;
    }
    this.setState(newState);
  }
  getTableHeadItemSortClass(columnName) {
    if(this.state.sortColumn === columnName) {
      return `table-head-item-sortable table-head-item-${this.state.sortDirection}`;
    } else {
      return 'table-head-item-sortable';
    }
  }

  toggleDropdown(toggleKey) {
    if(toggleKey) {
      let newState = {};
      newState[toggleKey] = !this.state[toggleKey];
      this.setState(newState);
    }
  }

  toggleHover(isOpen) {
    this.setState({ menuHover: isOpen });
  }
  render() {
    let rows = [
      {
        title: 'Batch to query new leads against contact',
        team: 'Marketing',
        min: 5,
        max: 12,
        est: 14
      },
      {
        title: 'Business account check',
        team: 'Engineering',
        min: 7,
        max: 12,
        est: 10
      },
      {
        title: 'Business account check',
        team: 'Engineering',
        min: 3,
        max: 8,
        est: 6
      },
      {
        title: 'Find matching account by contact and relate to account',
        team: 'Engineering',
        min: 5,
        max: 6,
        est: 5
      }
    ];
    let activeSort = _find(this.state.sortedColumns);
    // overwrite rows if we need to sort
    if(activeSort) {
      rows = _orderBy(rows, activeSort, this.state.sortDirection);
    }

    // build dropdown menu
    var leftMenu, rightMenu;
    if (this.state.menuHover || this.state.leftMenuOpen) {
      leftMenu = (
        <Dropdown className='table-left-menu'
                  isOpen={this.state.leftMenuOpen}
                  toggle={this.toggleDropdown.bind(this, 'leftMenuOpen')}
                  group={false}>
          <DropdownToggle className='fa fa-bars' />
          <DropdownMenu>
            <DropdownItem>Rename Milestone</DropdownItem>
            <DropdownItem>Delete Milestone</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }

    if (this.state.menuHover || this.state.rightMenuOpen) {
      rightMenu = (
        <Dropdown className='table-right-menu'
                  isOpen={this.state.rightMenuOpen}
                  toggle={this.toggleDropdown.bind(this, 'rightMenuOpen')}
                  group={false}>
          <DropdownToggle className='fa fa-chevron-down' />
          <DropdownMenu right>
            <DropdownItem>Rename Milestone</DropdownItem>
            <DropdownItem>Delete Milestone</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }

    // build rows
    let tableRows = _map(rows, (row, index) => {
      return (
        <div className='table-row row' key={index}
             onMouseOver={this.toggleHover.bind(this, true)}
             onMouseLeave={this.toggleHover.bind(this, false)}>
          <div className='col-sm-7'>
            <input type='text' className='form-control' placeholder='Add another task' defaultValue={row.title} />
          </div>
          <div className='col-sm-2'>
            <input type='text' className='form-control' placeholder='Responsible' defaultValue={row.team} />
          </div>
          <div className='col-sm-1'>
            <input type='number' className='form-control text-center' placeholder='Min' defaultValue={row.min} />
          </div>
          <div className='col-sm-1'>
            <input type='number' className='form-control text-center' placeholder='Max' defaultValue={row.max} />
          </div>
          <div className='col-sm-1'>
            <p className='text-center'>{row.est}</p>
          </div>
        </div>
      );
    });

    return (
      <div className='app-container'>
        <div className='container container-flex'>
          <input type='text' className='h1' defaultValue='[PWB-07734]' />
          <div className='table-block'>
            <div className='table-head row'
                 onMouseOver={this.toggleHover.bind(this, true)}
                 onMouseLeave={this.toggleHover.bind(this, false)}>
              {leftMenu}
              {rightMenu}

              <div className='col-sm-7 title-column'>
                <input type='text' className='form-control' defaultValue='Nice milestones' placeholder='Milestone Name'/>
              </div>
              <div className={'col-sm-2 align-self-center table-head-item'}>
                Team
              </div>
              <div className={'col-sm-1 align-self-center text-center table-head-item'}>
                Min
              </div>
              <div className={'col-sm-1 align-self-center text-center table-head-item'}>
                Max
              </div>
              <div className={'col-sm-1 align-self-center text-center table-head-item'}>
                Est.
              </div>
            </div>
            {tableRows}
            <div className='row'>
              <div className='col-sm-3 offset-sm-9 table-summary'>
                <div className='row'>
                  <div className='col-sm-4 text-center'>24</div>
                  <div className='col-sm-4 text-center'>46</div>
                  <div className='col-sm-4 text-center'>54</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }

}
