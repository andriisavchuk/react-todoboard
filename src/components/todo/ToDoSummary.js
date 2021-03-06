import React from 'react';

const ToDoSummary = ({todo}) => {
  return (
    <div className="card z-depth-0 todo-summury">
      <div className="card-content grey-text text-darken-3">
        <h4 className="todo-title">{todo.title}</h4>
        <p>Created by AS</p>
        <p className="grey-text">16/09/2018</p>
      </div>
    </div>
  );
};

export default ToDoSummary;
