import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const ButtonSizes = {};

ButtonSizes.title = 'Button Sizes';

ButtonSizes.template = (props) => {
  return (
    <CodeCard id={'buttonSizes'} title={ButtonSizes.title}>
      <button type='button' className='btn btn-inline btn-primary btn-sm'>Small</button>
      <button type='button' className='btn btn-inline btn-primary btn-md'>Regular</button>
      <button type='button' className='btn btn-inline btn-primary btn-lg'>Large</button>
    </CodeCard>
  );
};

export default ButtonSizes;