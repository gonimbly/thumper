import React, { Component } from 'react';
import CodeCard from '../../components/CodeCard/CodeCard';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const RSTabs = {};

RSTabs.title = 'Reactstrap Tabs';

RSTabs.template = class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };
  }

  toggle(newTab) {
    if (this.state.activeTab !== newTab) {
      console.log('setting state to tab', newTab);
      this.setState({
        activeTab: newTab
      });
    }
  }

  render() {
    console.log('render:', this.state.activeTab);
    return (
      <CodeCard id={'RSTabs'} title={RSTabs.title}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={ this.toggle.bind(this, '1') }
              href="#"
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={ this.toggle.bind(this, '2') }
              href="#"
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
                <h4>Tab 2 Contents</h4>
          </TabPane>
        </TabContent>
      </CodeCard>
    );
  }
};

export default RSTabs;