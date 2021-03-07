import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import NavBarContainer from './containers/NavBarContainer';

class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        {/* <Switch>
          <Route exact path="/" component={() => <MainContainer />} />
        </Switch> */}
        <MainContainer />
      </div>
    );
  }
}

export default App;

