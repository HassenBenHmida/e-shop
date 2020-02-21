import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
