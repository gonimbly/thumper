import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const NavTabs = {};

NavTabs.title = 'Nav Tabs';

NavTabs.template = (props) => {
  return (
    <CodeCard id={'navTabs'} title={NavTabs.title}>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <a className='nav-link active' href='#'>Active</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Link</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Link</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>Disabled</a>
        </li>
      </ul>
    </CodeCard>
  );
};

export default NavTabs;