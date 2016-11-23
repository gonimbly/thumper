import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Links = {};

Links.title = 'Links';

Links.template = (props) => {
  return (
    <CodeCard id={'links'} title={Links.title}>
      <a href='#' className='btn btn-link btn-inline'>Link</a>
      <a href='#' className='btn btn-link btn-inline disabled'>Link disabled</a>
    </CodeCard>
  );
};

export default Links;