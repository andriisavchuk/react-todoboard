import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>ToDo App</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
