import React from 'react';
import ToDoSummury from './ToDoSummury';

const ToDoList = () => {
  return (
    <div className="todo-list section">
      <ToDoSummury />
      <ToDoSummury />
      <ToDoSummury />
      <ToDoSummury />
    </div>
  );
};

export default ToDoList;
