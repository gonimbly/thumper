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
      <button type='button' className='btn btn-inline btn-link'>Link</button>
      <br className='notcode'/>

      <button type='button' className='btn btn-inline btn-primary' disabled>Primary</button>
      <button type='button' className='btn btn-inline btn-secondary' disabled>Secondary</button>
      <button type='button' className='btn btn-inline btn-success' disabled>Success</button>
      <button type='button' className='btn btn-inline btn-info' disabled>Info</button>
      <button type='button' className='btn btn-inline btn-warning' disabled>Warning</button>
      <button type='button' className='btn btn-inline btn-danger' disabled>Danger</button>
      <button type='button' className='btn btn-inline btn-link' disabled>Link</button>
    </CodeCard>
  );
};

export default BasicButtons;