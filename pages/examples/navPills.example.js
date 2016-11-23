import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const NavPills = {};

NavPills.title = 'Nav Pills';

NavPills.template = (props) => {
  return (
    <CodeCard id={'navPills'} title={NavPills.title}>
      <ul className='nav nav-pills'>
        <li className='nav-item'>
          <a className='nav-link' href='#'>All</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link active' href='#'>Recent</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Weakest</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Strongest</a>
        </li>
      </ul>
    </CodeCard>
  );
};

export default NavPills;