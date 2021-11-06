import * as React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from './pages/login/Login';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'>
            <div>Home page</div>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='passwords'>
            <div>There will be passwords</div>
          </Route>
        </Switch>
      </div>
    )
  }
}
export default App;
