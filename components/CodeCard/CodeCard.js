import React, { Component, PropTypes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import Collapse from 'react-collapse';
import {forEach, cloneDeep} from 'lodash';
import jsxToString from 'jsx-to-string';
import Clipboard from 'clipboard';

import './codeCard.scss';

class CodeCard extends Component {
  constructor(props) {
    super(props);
    this.collapse = this.collapse.bind(this);
    this.show = this.show.bind(this);
    this.toggle = this.toggle.bind(this);

    let allChildren = props.children.hasOwnProperty('length') ? props.children : [props.children];
    allChildren = this.removeNotCodeChildren(allChildren, '...');
    let strChildren = [];
    forEach(allChildren, child => {
      strChildren.push(jsxToString(child));
    });
    let stringCode = strChildren.join('\n');
    this.state = {
      isOpened: false,
      forceOpen: false,
      stringCode: stringCode
    };
  }

  removeNotCodeChildren(children, replaceItems) {
    var returnChildren = [];
    forEach(children, child => {
      // remove if child is notcode
      child = cloneDeep(child);
      // console.log('child: ' + jsxToString(child));
      if(child.props) {
        if(child.props.className && child.props.className.indexOf('notcode') > -1) {
          if(replaceItems && this.props.showEllipsis) {
            return returnChildren.push(replaceItems);
          } else {
            return;
          }
        }

        // console.log('children: ' + child.props.children);
        if(child.props.children && typeof child.props.children !== 'string' && child.props.children.length > 0) {
          child.props.children = this.removeNotCodeChildren(child.props.children, replaceItems);
        }
      }
      
      returnChildren.push(child);
    });
    return returnChildren;
  }

  collapse() {
    this.setState({
      hover: false,
      isOpened: false
    });
  }

  show() {
    this.setState({
      hover: true
    });

    setTimeout(function() {
      if(this.state.hover) {
        this.setState({
          isOpened: true
        });
      }
    }.bind(this), 200);
  }

  toggle() {
    this.setState({forceOpen: !this.state.forceOpen});
  }

  render() {
    let codeLabel = this.state.forceOpen ? 'Pinned ': '';
    return (
      <section className='card' id={this.props.id}>
        <h2 className='card-header'>{this.props.title}</h2>
        <div className={`card-block ${this.props.extraSpace ? 'ml-4 mr-4': ''}`}>
          {this.props.children}
        </div>
        <div className='card-footer'>
          <a className={'btn btn-link'} onClick={this.toggle}>{codeLabel}Code</a>
          <a className={'btn btn-link pull-right'} ref='copyBtn' data-clipboard-text={this.state.stringCode}>Copy</a>
          <Collapse isOpened={this.state.isOpened || this.state.forceOpen}>
            <SyntaxHighlighter language='html' style={docco}>
              {this.state.stringCode}
            </SyntaxHighlighter>
          </Collapse>
        </div>
      </section>
    );
  }

  componentDidMount() {
    var cb = new Clipboard(this.refs.copyBtn);
    this.setState({clipboard: cb});
  }

  componentWillUnmount() {
    this.state.clipboard.destroy();
  }

}

CodeCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showEllipsis: PropTypes.bool,
  extraSpace: PropTypes.bool
};

CodeCard.defaultProps = {
  showEllipsis: false,
  extraSpace: false
};

export default CodeCard;