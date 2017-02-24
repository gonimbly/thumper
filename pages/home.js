import React, { Component } from 'react';
import Filter from '../components/Filter/Filter';
import CodeCards from '../components/CodeCards/CodeCards';
import Headers from './examples/headers.example.js';
import Grid from './examples/grid.example.js';
import Links from './examples/links.example.js';
import BasicButtons from './examples/basicButtons.example.js';
import OutlineButtons from './examples/outlineButtons.example.js';
import ButtonSizes from './examples/buttonSizes.example.js';
import Dropdowns from './examples/dropdowns.example.js';
import Cards from './examples/cards.example.js';
import DataTable from './examples/dataTable.example.js';
import Modals from './examples/modals.example.js';
import './home.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredData: null,
      cards: [
        Headers,
        Grid,
        Links,
        BasicButtons,
        OutlineButtons,
        ButtonSizes,
        Dropdowns,
        Cards,
        DataTable,
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
    const cardsData = this.state.filteredData || this.state.cards;
    return (
      <div className='container'>
        <div className='header-bar d-flex'>
          <h1>Basics</h1>
          <Filter className='form-inline ml-auto' data={this.state.cards} onDataFiltered={this.onDataFiltered.bind(this)} filterKey={'title'} />
        </div>
        <CodeCards cards={cardsData} />
      </div>
    );
  }

}

export default Home;