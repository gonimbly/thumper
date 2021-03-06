import React from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';

const BasicForm = {};

BasicForm.title = 'Basic Form';

BasicForm.template = (props) => {
  return (
    <CodeCard id={'BasicForm'} title={BasicForm.title}>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1">Example select</label>
          <select className="form-control" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect2">Example multiple select</label>
          <select multiple className="form-control" id="exampleSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea">Example textarea</label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">File input</label>
          <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
          <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
        </div>
        <fieldset className="form-group">
          <legend>Radio buttons</legend>
          <div className="form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" defaultValue="option1" />
              Option one is this and that&mdash;be sure to include why it's great
            </label>
          </div>
          <div className="form-check">
          <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
              Option two can be something else and selecting it will deselect option one
            </label>
          </div>
          <div className="form-check disabled">
          <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" defaultValue="option3" disabled />
              Option three is disabled
            </label>
          </div>
        </fieldset>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" />
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </CodeCard>
  );
};

export default BasicForm;