import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Headers = {};

Headers.title = 'Headers';

Headers.template = (props) => {
  return (
    <CodeCard id={'headers'} title={Headers.title}>
      <h1>H1 Header</h1>
      <h2>H2 Header</h2>
      <h3>H3 Header</h3>
    </CodeCard>
  );
};

export default Headers;