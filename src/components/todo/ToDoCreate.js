import React, {Component} from 'react';

class ToDoCreate extends Component {
  state = {
    title: '',
    content: ''
  };

  onSubmitHandler = event => {
    event.preventDefault();
    console.log(this.state);
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.onSubmitHandler} className='white'>
          <h5 className="grey-text text-darken-3">New ToDo Task</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id='title' onChange={this.onChangeHandler}/>
          </div>

          <div className="input-field">
            <label htmlFor="content">ToDo Description</label>
            <textarea id="content" className="materialize-textarea" onChange={this.onChangeHandler}></textarea>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add Task</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ToDoCreate;