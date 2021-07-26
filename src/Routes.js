import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// yeeun's 컴포넌트
import Login from './pages/yeeun/Login/Login';
import Main from './pages/yeeun/Main/Main';

// moonsil's 컴포넌트
import LoginM from './pages/moonsil/Login/Login';
import MainM from './pages/moonsil/Main/Main';

// juyoung's 컴포넌트
import LoginJ from './pages/juyoung/Login/Login';
import MainJ from './pages/juyoung/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login-Yeeun" component={Login} />
          <Route exact path="/Main-Yeeun" component={Main} />

          <Route exact path="/Login-Moonsil" component={LoginM} />
          <Route exact path="/Main-Moonsil" component={MainM} />

          <Route exact path="/Login-Juyoung" component={LoginJ} />
          <Route exact path="/Main-Juyoung" component={MainJ} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
