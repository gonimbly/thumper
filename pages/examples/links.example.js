import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Links = {};

Links.title = 'Links';

Links.template = (props) => {
  return (
    <CodeCard id={'links'} title={Links.title}>
      <a href='#'>Link</a>
      <br className='notcode'/>
      <a href='#' disabled>Link Disabled</a>
    </CodeCard>
  );
};

export default Links;