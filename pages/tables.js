import React, { Component } from 'react';
import Filter from '../components/Filter/Filter';
import CodeCards from '../components/CodeCards/CodeCards';
import Tables from './examples/tables.example.js';
import TableForm from './examples/tableForm.example.js';
import TableFormMenus from './examples/tableFormMenus.example.js';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredData: null,
      cards: [
        Tables,
        TableForm,
        TableFormMenus
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
          <h1>Tables</h1>
          <Filter className='form-inline ml-auto' data={this.state.cards} onDataFiltered={this.onDataFiltered.bind(this)} filterKey={'title'} />
        </div>
        <CodeCards cards={cardsData} />
      </div>
    );
  }

}