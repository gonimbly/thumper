import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import Jen from './img/Jen_final_mug_Square.jpg';
import Troy from './img/Troy_Final_Square.jpg';
import _times from 'lodash/times';

const SelectGrid = {};

SelectGrid.title = 'SelectGrid';

SelectGrid.template = (props) => {
  let gridOptions = [(
    <div className='select-grid-option select-grid-option-selected' key='irregular'>
      <div className='select-grid-thumb avatar avatar-lg'>
        <img src={Jen} alt='Jen Igartua' />
      </div>
      <div className='select-grid-content'>{'Irregular Human'}</div>
    </div>
  )];
  _times(20, (n) => {
    gridOptions.push(
      <div className='select-grid-option' key={'item' + n}>
        <div className='select-grid-thumb avatar avatar-lg'>
          <img src={Troy} alt='Troy Conquer' />
        </div>
        <div className='select-grid-content'>{'Regular Human ' + n}</div>
      </div>
    );
  });


  return (
    <CodeCard id={'SelectGrid'} title={SelectGrid.title}>
      <div style={{width: '402px', height: '300px', border: '1px solid #333'}}>
        <div className='select-grid'>
          {gridOptions}
        </div>
      </div>
    </CodeCard>
  );
};

export default SelectGrid;