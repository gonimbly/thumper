import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Cards = {};

Cards.title = 'Cards';

Cards.template = (props) => {
  return (
    <CodeCard id={'cards'} title={Cards.title}>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='card text-xs-center'>
            <div className='card-block'>
              <h4 className='card-title'>card</h4>
              <blockquote className='card-blockquote'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
              </blockquote>
            </div>
          </div>
          <div className='card card-inverse card-primary text-xs-center'>
            <div className='card-block'>
              <h4 className='card-title'>card card-inverse card-primary</h4>
              <blockquote className='card-blockquote'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
              </blockquote>
            </div>
          </div>
          <div className='card card-warning text-xs-center'>
            <div className='card-block'>
              <h4 className='card-title'>card card-warning</h4>
              <blockquote className='card-blockquote'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='card card-inverse card-secondary text-xs-center'>
            <div className='card-block'>
              <h4 className='card-title'>card card-inverse card-secondary</h4>
              <blockquote className='card-blockquote'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
              </blockquote>
            </div>
          </div>
          <div className='card card-inverse card-info text-xs-center'>
            <div className='card-block'>
              <h4 className='card-title'>card card-inverse card-info</h4>
              <blockquote className='card-blockquote'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
              </blockquote>
            </div>
          </div>
          <div className='card card-inverse card-danger text-xs-center'>
            <div className='card-block'>
              <h4 className='card-title'>card card-inverse card-danger</h4>
              <blockquote className='card-blockquote'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </CodeCard>
  );
};

export default Cards;