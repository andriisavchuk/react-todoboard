import React from 'react';
import ToDoSummary from './ToDoSummary';

const ToDoList = ({todos}) => {
  return (
    <div className="todo-list section">
      {todos && todos.map(todo => {
        return(
          <ToDoSummary todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
};

export default ToDoList;
