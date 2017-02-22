import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const InputGroup = {};

InputGroup.title = 'Input Group';

InputGroup.template = (props) => {
  return (
    <CodeCard id={'InputGroup'} title={InputGroup.title}>
      <div className='input-group'>
        <span className='input-group-addon' id='basic-addon1'>@</span>
        <input type='text' className='form-control' placeholder='Username'/>
      </div>
      <br />
      <div className='input-group'>
        <input type='text' className='form-control' placeholder='Recipients username' />
        <span className='input-group-addon' id='basic-addon2'>@example.com</span>
      </div>
      <br />
      <label htmlFor='basic-url'>Your vanity URL</label>
      <div className='input-group'>
        <span className='input-group-addon' id='basic-addon3'>https://example.com/users/</span>
        <input type='text' className='form-control' id='basic-url' />
      </div>
      <br />
      <div className='input-group'>
        <span className='input-group-addon'>$</span>
        <input type='text' className='form-control' aria-label='Amount (to the nearest dollar)' />
        <span className='input-group-addon'>.00</span>
      </div>
      <br />
      <div className='input-group'>
        <span className='input-group-addon'>$</span>
        <span className='input-group-addon'>0.00</span>
        <input type='text' className='form-control' aria-label='Amount (to the nearest dollar)' />
      </div>
    </CodeCard>
  );
};

export default InputGroup;