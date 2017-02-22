import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const HeaderInput = {};

HeaderInput.title = 'Header Input';

HeaderInput.template = (props) => {
  return (
    <CodeCard id={'HeaderInput'} title={HeaderInput.title}>
      <input type="text" className="form-control form-control-inline h1" value="[GPLU-0117] Estimator v.Fog (Thumper Updates)" />
    </CodeCard>
  );
};

export default HeaderInput;