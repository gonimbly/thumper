import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const OutlineButtons = {};

OutlineButtons.title = 'Outline Buttons';

OutlineButtons.template = (props) => {
  return (
    <CodeCard id={'outlineButtons'} title={OutlineButtons.title}>
      <button type='button' className='btn btn-inline btn-outline-default'>Default</button>
      <button type='button' className='btn btn-inline btn-outline-primary'>Primary</button>
      <button type='button' className='btn btn-inline btn-outline-secondary'>Secondary</button>
      <button type='button' className='btn btn-inline btn-outline-success'>Success</button>
      <button type='button' className='btn btn-inline btn-outline-info'>Info</button>
      <button type='button' className='btn btn-inline btn-outline-warning'>Warning</button>
      <button type='button' className='btn btn-inline btn-outline-danger'>Danger</button>
    </CodeCard>
  );
};

export default OutlineButtons;