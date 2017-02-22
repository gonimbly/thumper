import React, { Component, PropTypes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import Collapse from 'react-collapse';
import {forEach} from 'lodash';
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
    let strChildren = [];
    forEach(allChildren, child => {
      let str = jsxToString(child);
      if(str.indexOf('notcode') === -1) {
        strChildren.push(str);
      }
    });
    let stringCode = strChildren.join('\n');
    this.state = {
      isOpened: false,
      forceOpen: false,
      stringCode: stringCode
    };
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
        <div className='card-block'>
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
  children: PropTypes.node.isRequired
};

export default CodeCard;