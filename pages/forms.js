import React, { Component } from 'react';
import Filter from '../components/Filter/Filter';
import CodeCards from '../components/CodeCards/CodeCards';
import BasicForm from './examples/basicForm.example.js';
import InputGroup from './examples/inputGroup.example.js';
import FormErrors from './examples/formErrors.example.js';
import HeaderInput from './examples/headerInput.example.js';
import RSSearchableDropdowns from './examples/rsSearchableDropdowns.example.js';
import PopoverForm from './examples/popoverForm.example.js';

class Forms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredData: null,
      cards: [
        BasicForm,
        InputGroup,
        HeaderInput,
        FormErrors,
        RSSearchableDropdowns,
        PopoverForm
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
          <h1>Forms</h1>
          <Filter className='form-inline ml-auto' data={this.state.cards} onDataFiltered={this.onDataFiltered.bind(this)} filterKey={'title'} />
        </div>
        <CodeCards cards={cardsData} />
      </div>
    );
  }

}

export default Forms;