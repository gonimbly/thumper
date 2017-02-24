import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const Example = {};

Example.title = 'Form Table';

Example.template = (props) => {
  return (
    <CodeCard id={'formTable'} title={Example.title}>
      <div className='table-block'>
        <div className='table-head row'>

          <div className='col-sm-7 title-column'>
            <input type='text' className='form-control' defaultValue='Nice milestones' placeholder='Milestone Name'/>
          </div>
          <div className={'col-sm-2 align-self-center table-head-item'}>
            Team
          </div>
          <div className={'col-sm-1 align-self-center text-center table-head-item'}>
            Min
          </div>
          <div className={'col-sm-1 align-self-center text-center table-head-item'}>
            Max
          </div>
          <div className={'col-sm-1 align-self-center text-center table-head-item'}>
            Est.
          </div>
        </div>
        <div className='table-row row'>
          <div className='col-sm-7'>
            <input type='text' className='form-control' placeholder='Add another task' defaultValue='Batch to query new leads against contact' />
          </div>
          <div className='col-sm-2'>
            <input type='text' className='form-control' placeholder='Responsible' defaultValue='Marketing' />
          </div>
          <div className='col-sm-1'>
            <input type='number' className='form-control text-center' placeholder='Min' defaultValue='5' />
          </div>
          <div className='col-sm-1'>
            <input type='number' className='form-control text-center' placeholder='Max' defaultValue='12' />
          </div>
          <div className='col-sm-1'>
            <p className='text-center'>14</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3 offset-sm-9 table-summary'>
            <div className='row'>
              <div className='col-sm-4 text-center'>24</div>
              <div className='col-sm-4 text-center'>46</div>
              <div className='col-sm-4 text-center'>54</div>
            </div>
          </div>
        </div>
      </div>
    </CodeCard>
  );
};

export default Example;