import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import NewCode from './pages/NewCode';
import EditCode from './pages/EditCode';
import CodeDetails from './pages/CodeDetails';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/newcode" component={ NewCode } />
        <Route exact path="/editcode/:id" component={ EditCode } />
        <Route exact path="/codedetails/:id" component={ CodeDetails } />
        <Route exact path="/*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
