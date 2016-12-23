import React, {PropTypes} from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/home';
import Messenger from './pages/messenger';
import TableForm from './pages/tableForm';

const App = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node
};

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="messenger" component={Messenger} />
      <Route path="table-form" component={TableForm} />
    </Route>
  </Router>
), document.getElementById('app'));