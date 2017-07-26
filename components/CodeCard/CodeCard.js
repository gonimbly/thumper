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
    
    const {stringCode, displayChildren, cardLinks} = this.getChildrenStateValues(props);
    this.state = {
      isOpened: false,
      forceOpen: false,
      // the children processed down to a string that represents their code
      stringCode,
      // the react children to render
      displayChildren,
      // links to documentation for ex
      cardLinks
    };
  }

  getChildrenStateValues(props) {
    let allChildren = props.children.hasOwnProperty('length') ? props.children : [props.children];
    // process all children to retrieve the displayChildren and any extra cardLinks
    let {displayChildren, cardLinks} = this.separateChildren(allChildren);
    // you can include a class 'notcode' to use an element for display purposes and not render it in the code example, this method strips them out
    let codeChildren = this.removeNotCodeChildren(displayChildren, '...');
    // process all the children and compile them into a string that we can render for the code example
    let strChildren = [];
    forEach(codeChildren, child => {
      strChildren.push(jsxToString(child));
    });
    let stringCode = strChildren.join('\n');

    return {
      displayChildren,
      cardLinks,
      stringCode
    }
  }

  removeNotCodeChildren(children, replaceItems) {
    // you can include a class 'notcode' to use an element for display purposes and not render it in the code example, this method strips them out
    var docChildren = [];
    forEach(children, child => {
      // remove if child is notcode
      child = cloneDeep(child);
      // console.log('child: ' + jsxToString(child));
      if(child.props) {
        if(child.props.className && child.props.className.indexOf('notcode') > -1) {
          if(replaceItems && this.props.showEllipsis) {
            return docChildren.push(replaceItems);
          } else {
            return;
          }
        }

        // console.log('children: ' + child.props.children);
        if(child.props.children && typeof child.props.children !== 'string' && child.props.children.length > 0) {
          child.props.children = this.removeNotCodeChildren(child.props.children, replaceItems);
        }
      }
      docChildren.push(child);
    });
    return docChildren;
  }

  separateChildren(children) {
    // process all children to retrieve the displayChildren and any extra cardLinks
    var cardLinks = [];
    var displayChildren = [];
    forEach(children, child => {
      if(child.type.name === 'CodeCardLink') {
        let clone = React.cloneElement(child, {key: cardLinks.length});
        cardLinks.push(clone);
      } else {
        displayChildren.push(child);
      }
    });
    return {cardLinks, displayChildren};
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
    let codeLabel = this.state.forceOpen ? 'Hide ': 'Show ';
    return (
      <section className='card' id={this.props.id}>
        <div className='card-header d-flex align-items-right'>
          <h2 className='mr-auto'>{this.props.title}</h2>
          {this.state.cardLinks}
        </div>
        <div className={`card-block ${this.props.extraSpace ? 'ml-4 mr-4': ''}`}>
          {this.state.displayChildren}
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

  componentWillReceiveProps(nextProps) {
    this.setState(this.getChildrenStateValues(nextProps))
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