import React, { Component, PropTypes } from 'react';
import Fuse from 'fuse.js';

class Filter extends Component {
  constructor(props) {
    super(props);
    const fuseData = this.createFuseData(props);
    this.state = {fuseData};
  }

  componentWillReceiveProps(nextProps) {
    const fuseData = this.createFuseData(nextProps);
    this.setState({fuseData});
  }

  onFilterChanged(event) {
    var newValue = event.target.value;
    console.log('filter Changed:', newValue);

    if(this.state.fuseData && newValue.length > 0 && this.props.onDataFiltered) {
      const filteredData = this.state.fuseData.search(newValue);
      this.props.onDataFiltered(filteredData);
    } else {
      this.props.onDataFiltered(null);
    }
  }

  createFuseData(props) {
    const fuseOptions = {
      threshold: 0.3,
      keys: [props.filterKey]
    };
    return new Fuse(props.data, fuseOptions);
  }

  render() {
    return (
      <form className={this.props.className}>
        <input className='form-control' type='text' placeholder='Filter' onChange={this.onFilterChanged.bind(this)} />
      </form>
    );
  }

}

Filter.propTypes = {
  data: PropTypes.array,
  onDataFiltered: PropTypes.func,
  className: PropTypes.string,
  filterKey: PropTypes.string
};

export default Filter;