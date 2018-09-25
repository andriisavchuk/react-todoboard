import React, {Component} from 'react';

class SignUp extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    password: ''
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
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' onChange={this.onChangeHandler}/>
          </div>

          <div className="input-field">
            <label htmlFor="surname">Surname</label>
            <input type="text" id='surname' onChange={this.onChangeHandler}/>
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.onChangeHandler}/>
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.onChangeHandler}/>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;