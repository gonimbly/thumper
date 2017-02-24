import React, {PropTypes} from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Navigation from "./components/Navigation/Navigation";
import Home from './pages/home';
import Forms from './pages/forms';
import Tables from './pages/tables';
import Messenger from './pages/messenger';
import Communication from './pages/communication';
import TableForm from './pages/tableForm';
import NoMatch from './pages/noMatch';
import NavigationPage from './pages/navigation';
import Reactstrap from './pages/reactstrap';

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
      <Route path="navs" component={NavigationPage} />
      <Route path="communication" component={Communication} />
      <Route path="tables" component={Tables} />
      <Route path="reactstrap" component={Reactstrap} />

      <Route path="messenger" component={Messenger} />
      <Route path="table-form" component={TableForm} />
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById("app"));