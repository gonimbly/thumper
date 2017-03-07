import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const FormErrors = {};

FormErrors.title = 'Form Errors';

FormErrors.template = (props) => {
  return (
    <CodeCard id={'FormErrors'} title={FormErrors.title}>
      <div className='form-group has-success'>
        <label className='form-control-label' htmlFor='inputSuccess1'>Input with success</label>
        <input readOnly type='text' className='form-control form-control-success' id='inputSuccess1' />
        <div className='form-control-feedback'>Success! You've done it.</div>
        <small className='form-text text-muted'>Example help text that remains unchanged.</small>
      </div>
      <div className='form-group has-warning'>
        <label className='form-control-label' htmlFor='inputWarning1'>Input with warning</label>
        <input readOnly type='text' className='form-control form-control-warning' id='inputWarning1' />
        <div className='form-control-feedback'>Shucks, check the formatting of that and try again.</div>
        <small className='form-text text-muted'>Example help text that remains unchanged.</small>
      </div>
      <div className='form-group has-danger'>
        <label className='form-control-label' htmlFor='inputDanger1'>Input with danger</label>
        <input readOnly type='text' className='form-control form-control-danger' id='inputDanger1' />
        <div className='form-control-feedback'>Sorry, that username's taken. Try another?</div>
        <small className='form-text text-muted'>Example help text that remains unchanged.</small>
      </div>
    </CodeCard>
  );
};

export default FormErrors;