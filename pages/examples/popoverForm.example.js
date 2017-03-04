import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import CodeCardLink from '../../components/CodeCardLink/CodeCardLink';

const PopoverForm = {};

PopoverForm.title = 'PopoverForm';

PopoverForm.template = (props) => {
  return (
    <CodeCard id={'PopoverForm'} title={PopoverForm.title}>
      <CodeCardLink icon='' href='http://v4-alpha.getbootstrap.com/components/popovers/' />
      <div style={{position: 'relative', width: '50%', float: 'left'}}>
        <div className='popover popover-bottom'>
          <h2 className='popover-title'>Who is responsible?</h2>
          <form className='popover-inline-form'>
            <input type='text' className='form-control' placeholder='Search' />
          </form>
          <div className='popover-content'>
            <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
          </div>
        </div>

        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
        <br className='notcode' />
      </div>
    </CodeCard>
  );
};

export default PopoverForm;