import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Dropdowns = {};

Dropdowns.title = 'Dropdowns';

Dropdowns.template = (props) => {
  return (
    <CodeCard id={'dropdowns'} title={Dropdowns.title}>
      <div class="popover popover-top">
        <h3 class="popover-title">Popover top</h3>
        <div class="popover-content">
          <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
      </div>
    </CodeCard>
  );
};

export default Dropdowns;