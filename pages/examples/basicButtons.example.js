import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const BasicButtons = {};

BasicButtons.title = 'Basic Buttons';

BasicButtons.template = (props) => {
  return (
    <CodeCard id={'basicButtons'} title={BasicButtons.title}>
      <button type='button' className='btn btn-inline btn-primary'>Primary</button>
      <button type='button' className='btn btn-inline btn-secondary'>Secondary</button>
      <button type='button' className='btn btn-inline btn-success'>Success</button>
      <button type='button' className='btn btn-inline btn-info'>Info</button>
      <button type='button' className='btn btn-inline btn-warning'>Warning</button>
      <button type='button' className='btn btn-inline btn-danger'>Danger</button>
    </CodeCard>
  );
};

export default BasicButtons;