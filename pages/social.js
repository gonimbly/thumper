import React, { Component } from 'react';
import Filter from '../components/Filter/Filter';
import CodeCards from '../components/CodeCards/CodeCards';
import AvatarBasic from './examples/avatarBasic.example.js';
import AvatarStatus from './examples/avatarStatus.example.js';
import AvatarSizes from './examples/avatarSizes.example.js';
import AvatarActions from './examples/avatarActions.example.js';

class Social extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredData: null,
      cards: [
        AvatarSizes,
        AvatarBasic,
        AvatarStatus,
        AvatarActions
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
          <h1>Social</h1>
          <Filter className='form-inline ml-auto' data={this.state.cards} onDataFiltered={this.onDataFiltered.bind(this)} filterKey={'title'} />
        </div>
        <CodeCards cards={cardsData} />
      </div>
    );
  }

}

export default Social;