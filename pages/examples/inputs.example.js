import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Inputs = {};

Inputs.title = 'Inputs';

Inputs.template = (props) => {
  return (
    <CodeCard id={'inputs'} title={Inputs.title}>
      <form>
        <fieldset className='form-group'>
          <label htmlFor='name'>Name of Business</label>
          <input type='text' className='form-control' id='name' />
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='confirm'>Initial Confirmation</label>
          <div className='input-group'>
            <input type='number' className='form-control' />
            <span className='input-group-addon'>Days</span>
          </div>
          <small className='text-muted'>Number of days before appointment date.</small>
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='confirm'>Reminder</label>
          <div className='input-group'>
            <input type='number' className='form-control' />
            <span className='input-group-addon'>Days</span>
          </div>
          <small className='text-muted'>Number of days after initial confirmation.</small>
        </fieldset>
      </form>
    </CodeCard>
  );
};

export default Inputs;