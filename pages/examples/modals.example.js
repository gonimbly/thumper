import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Modals = {};

Modals.title = 'Modals';

Modals.template = (props) => {
  return (
    <CodeCard id={'modals'} title={Modals.title}>
      <div className='modal'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
              <h4 className='modal-title'>Modal title</h4>
            </div>
            <div className='modal-body'>
              <p>He was lost, in the modal of nowhere.</p>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-inline btn-secondary' data-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-inline btn-primary'>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </CodeCard>
  );
};

export default Modals;