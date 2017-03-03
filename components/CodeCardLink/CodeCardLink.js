import React, { Component, PropTypes } from 'react';

class CodeCardLink extends Component {

  render() {
    let iconClass = this.props.icon ? 'fa': '';
    return (<a className={`btn btn-link ${iconClass}`} target='_blank' href={this.props.href}>{this.props.icon || this.props.title}</a>);
  }

}

CodeCardLink.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string.isRequired
};

export default CodeCardLink;