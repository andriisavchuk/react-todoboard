import React from "react";

const ToDoDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section todo-detail">
      <div className="card z-depth-zero">
        <div className="card-content">
          <h3 className="card-title">ToDo Title - {id}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quibusdam magni autem eius quia tenetur optio consectetur sunt ipsam
            maiores!
          </p>
        </div>

        <div className="card-action gret lighten-4 grey-text">
          <p>Posted by AS</p>
          <span>2nd September, 3.00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default ToDoDetails;
