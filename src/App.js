import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import ToDoCreate from './components/todo/ToDoCreate';
import ToDoDetails from './components/todo/ToDoDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/todo/:id" component={ToDoDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={ToDoCreate} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
