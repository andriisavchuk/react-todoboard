import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import ToDoList from '../todo/ToDoList';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { todos } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ToDoList todos={todos} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoList.todos
});

export default connect(mapStateToProps)(Dashboard);
