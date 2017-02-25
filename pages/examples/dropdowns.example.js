import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Dropdowns = {};

Dropdowns.title = 'Dropdowns';

Dropdowns.template = (props) => {
  return (
    <CodeCard id={'dropdowns'} title={Dropdowns.title}>
      <div className="dropdown">
        <button type='button' className='btn btn-inline btn-primary dropdown-toggle'>
          Action
        </button>
      </div>
      <div className="dropdown">
        <button type='button' className='btn btn-inline btn-secondary dropdown-toggle hover'>
          Action
        </button>
        <div className='dropdown-menu d-block'>
          <a className='dropdown-item' href='#'>Action</a>
          <a className='dropdown-item' href='#'>Another action</a>
          <a className='dropdown-item' href='#'>Something else here</a>
          <div className='dropdown-divider'></div>
          <a className='dropdown-item' href='#'>Separated link</a>
        </div>
      </div>
      <br className='notcode' />
      <br className='notcode' />
      <br className='notcode' />
      <br className='notcode' />
      <br className='notcode' />
      <br className='notcode' />
      <br className='notcode' />
    </CodeCard>
  );
};

export default Dropdowns;