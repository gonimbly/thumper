import React, {PropTypes} from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Navigation from "./components/Navigation/Navigation";
import Home from './pages/home';
import Forms from './pages/forms';
import Messenger from './pages/messenger';
import TableForm from './pages/tableForm';
import NoMatch from './pages/noMatch';

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
  <Router history={browserHistory}>
    <Route path="/" name="home" component={App}>
      <IndexRoute component={Home} />
      <Route path="forms" component={Forms} />
      <Route path="messenger" component={Messenger} />
      <Route path="table-form" component={TableForm} />
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById("app"));