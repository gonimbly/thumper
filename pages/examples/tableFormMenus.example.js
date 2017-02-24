import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

const Example = {};

Example.title = 'Form Table: Menus & Buttons';

Example.template = (props) => {
  return (
    <CodeCard id={'formTable'} title={Example.title} showEllipsis extraSpace>
      <div className='table-block'>
        <div className='table-head row'>
          <Button className='table-left-btn fa fa-bars' ></Button>
          <Dropdown className='table-right-menu'
                    isOpen={true}
                    toggle={()=>{}}
                    group={false}>
            <DropdownToggle className='fa fa-chevron-down' />
            <DropdownMenu right>
              <DropdownItem>Rename Milestone</DropdownItem>
              <DropdownItem>Delete Milestone</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className='col-sm-7 title-column notcode'>
            <input type='text' className='form-control' defaultValue='Nice milestones' placeholder='Milestone Name'/>
          </div>
          <div className={'col-sm-2 align-self-center table-head-item notcode'}>
            Team
          </div>
          <div className={'col-sm-1 align-self-center text-center table-head-item notcode'}>
            Min
          </div>
          <div className={'col-sm-1 align-self-center text-center table-head-item notcode'}>
            Max
          </div>
          <div className={'col-sm-1 align-self-center text-center table-head-item notcode'}>
            Est.
          </div>
        </div>
        <div className='table-row row notcode'>
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
        <div className='row notcode'>
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