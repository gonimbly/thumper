import React, { Component, PropTypes } from 'react';
import _map from 'lodash/map';

class CodeCards extends Component {

  render() {
    const cardsData = this.props.cards;
    const cards = _map(cardsData, (card) => {
      let Template = card.template;
      return <Template key={card.title} />;
    });
    return <div>
      {cards}
    </div>;
  }

}

CodeCards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default CodeCards;