import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import CodeCardLink from '../../components/CodeCardLink/CodeCardLink';

const Popovers = {};

Popovers.title = 'Popovers';

Popovers.template = (props) => {
  return (
    <CodeCard id={'Popovers'} title={Popovers.title}>
      <CodeCardLink icon='' href='http://v4-alpha.getbootstrap.com/components/popovers/' />
      <div style={{position: 'relative', width: '50%', float: 'left'}}>
        <div className='popover popover-top'>
          <h2 className='popover-title'>Popover Top</h2>
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
      <div style={{position: 'relative', width: '50%', float: 'left'}}>
        <div className='popover popover-bottom'>
          <h2 className='popover-title'>Popover Bottom</h2>
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
      <div style={{position: 'relative', width: '50%', float: 'left'}}>
        <div className='popover popover-left'>
          <h2 className='popover-title'>Popover Left</h2>
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
      <div style={{position: 'relative', width: '50%', float: 'left'}}>
        <div className='popover popover-right'>
          <h2 className='popover-title'>Popover Right</h2>
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

export default Popovers;