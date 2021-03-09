import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import './styles.css';

function App() {
  return (
    <div className="main">
      {/* <Switch>
        <Route exact path="/" component={() => <MainContainer />} />
      </Switch> */}
      {/* <AboutUs /> */}
      <MainContainer />
    </div>
  );
}

export default App;
