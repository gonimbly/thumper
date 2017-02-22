import React, { Component } from 'react';
import Filter from '../components/Filter/Filter';
import CodeCards from '../components/CodeCards/CodeCards';
import NavPills from './examples/navPills.example.js';
import NavTabs from './examples/navTabs.example.js';
import Dropdowns from './examples/dropdowns.example.js';
import RSDropdowns from './examples/rsDropdowns.example.js';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredData: null,
      cards: [
        NavPills,
        NavTabs,
        Dropdowns,
        RSDropdowns
      ]
    };
  }

  onDataFiltered(filteredData) {
    this.setState({
      filteredData: filteredData
    });
  }

  render() {
    const cardsData = this.state.filteredData || this.state.cards;
    return (
      <div className='container'>
        <div className='header-bar d-flex'>
          <h1>Navigation</h1>
          <Filter className='form-inline ml-auto' data={this.state.cards} onDataFiltered={this.onDataFiltered.bind(this)} filterKey={'title'} />
        </div>
        <CodeCards cards={cardsData} />
      </div>
    );
  }

}

export default Navigation;