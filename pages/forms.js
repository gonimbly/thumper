import React, { Component } from 'react';
import Filter from '../components/Filter/Filter';
import CodeCards from '../components/CodeCards/CodeCards';
import Modals from './examples/modals.example.js';

class Forms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredData: null,
      cards: [
        Modals
      ]
    };
  }

  onDataFiltered(filteredData) {
    this.setState({
      filteredData: filteredData
    });
  }

  render() {
    console.log('render forms');
    const cardsData = this.state.filteredData || this.state.cards;
    return (
      <div className='container'>
        <div className='header-bar d-flex'>
          <h1>Forms</h1>
          <Filter className='form-inline ml-auto' data={this.state.cards} onDataFiltered={this.onDataFiltered.bind(this)} filterKey={'title'} />
        </div>
        <CodeCards cards={cardsData} />
      </div>
    );
  }

}

export default Forms;