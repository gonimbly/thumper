import React, { Component } from 'react';
import _map from 'lodash/map';
import Filter from '../components/Filter/Filter';
import Headers from './examples/headers.example.js';
import Grid from './examples/grid.example.js';
import Links from './examples/links.example.js';
import BasicButtons from './examples/basicButtons.example.js';
import OutlineButtons from './examples/outlineButtons.example.js';
import ButtonSizes from './examples/buttonSizes.example.js';
import NavPills from './examples/navPills.example.js';
import NavTabs from './examples/navTabs.example.js';
import Dropdowns from './examples/dropdowns.example.js';
import Messages from './examples/messages.example.js';
import Cards from './examples/cards.example.js';
import Tables from './examples/tables.example.js';
import Modals from './examples/modals.example.js';
import './home.scss';

export default class extends Component {

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
        NavPills,
        NavTabs,
        Dropdowns,
        Messages,
        Cards,
        Tables,
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
    console.log('render');
    const cardsData = this.state.filteredData || this.state.cards;
    const cards = _map(cardsData, (card) => {
      let Template = card.template;
      return <Template key={card.title} />;
    });
    return (
      <div className='container'>
        <div className='header-bar'>
          <Filter className='form-inline float-xs-right' data={this.state.cards} onDataFiltered={this.onDataFiltered.bind(this)} filterKey={'title'} />
          <h1>Components</h1>
        </div>
        <div className='card'>
          <div className='card-block'>
            {cards}
          </div>
        </div>
      </div>
    );
  }

}
