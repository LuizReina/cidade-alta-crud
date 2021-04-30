import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import NewCode from './pages/NewCode';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/newcode" component={ NewCode } />
      </Switch>
    );
  }
}

export default App;
