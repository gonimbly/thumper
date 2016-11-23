import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Grid = {};

Grid.title = 'Grid';

Grid.template = (props) => {
  return (
    <CodeCard id={'grid'} title={Grid.title}>
      <p className='notcode'>Bootstrap has a 12 column grid, we usually setup columns to become rows on mobile devices</p>
      <div className='row'>
        <div className='col-xs-12 col-md-1 bg-primary'>1</div>
        <div className='col-xs-12 col-md-1 bg-primary-light'>2</div>
        <div className='col-xs-12 col-md-1 bg-primary'>3</div>
        <div className='col-xs-12 col-md-1 bg-primary-light'>4</div>
        <div className='col-xs-12 col-md-1 bg-primary'>5</div>
        <div className='col-xs-12 col-md-1 bg-primary-light'>6</div>
        <div className='col-xs-12 col-md-1 bg-primary'>7</div>
        <div className='col-xs-12 col-md-1 bg-primary-light'>8</div>
        <div className='col-xs-12 col-md-1 bg-primary'>9</div>
        <div className='col-xs-12 col-md-1 bg-primary-light'>10</div>
        <div className='col-xs-12 col-md-1 bg-primary'>11</div>
        <div className='col-xs-12 col-md-1 bg-primary-light'>12</div>
      </div>
      <br className='notcode' />
      <p className='notcode'>50/50 grid</p>
      <div className='row'>
        <div className='col-xs-12 col-md-6 bg-primary'>
          <p>col-xs-12 col-md-6 bg-primary</p>
        </div>
        <div className='col-xs-12 col-md-6 bg-primary-light'>
          <p>col-xs-12 col-md-6 bg-primary-light</p>
        </div>
      </div>
      <br className='notcode' />
      <p className='notcode'>You can mix and match any way.</p>
      <div className='row'>
        <div className='col-xs-12 col-md-6 bg-primary'>
          <p>col-xs-12 col-md-6 bg-primary</p>
        </div>
        <div className='col-xs-12 col-md-4 bg-primary-light'>
          <p>col-xs-12 col-md-4 bg-primary-light</p>
        </div>
        <div className='col-xs-12 col-md-2 bg-primary'>
          <p>col-xs-12 col-md-2 bg-primary</p>
        </div>
      </div>
      <br className='notcode' />
      <p className='notcode'>You can offset columns to center them, this one collapses down to full width at smaller sizes.</p>
      <div className='row'>
        <div className='col-xs-12 offset-md-3 col-md-6 bg-primary-light'>
          <p>col-xs-12 offset-md-3 col-md-6 bg-primary-light</p>
        </div>
      </div>
    </CodeCard>
  );
};

export default Grid;