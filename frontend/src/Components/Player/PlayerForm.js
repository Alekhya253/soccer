import React, { createRef } from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
  firstNameRef = createRef();
  lastNameRef = createRef();
  phoneRef = createRef();
  emailRef = createRef();

  submitPlayer = (event) => {
    event.preventDefault();

    const firstName = this.firstNameRef.current.value;
    const lastName = this.lastNameRef.current.value;
    const phone = this.phoneRef.current.value;
    const email = this.emailRef.current.value;

    axios
      .post('http://127.0.0.1:4000/players', {
        firstName,
        lastName,
        phone,
        email,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='row'>
        <h1 className='center'>Add a new player</h1>
        <form className='col s12' onSubmit={this.submitPlayer}>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                id='firstName'
                ref={this.firstNameRef}
                type='text'
                className='validate'
              />
              <label htmlFor='firstName'>First Name</label>
            </div>
            <div className='input-field col s6'>
              <input
                id='lastName'
                ref={this.lastNameRef}
                type='text'
                className='validate'
              />
              <label htmlFor='lastName'>Last Name</label>
            </div>
            <div className='input-field col s6'>
              <input
                id='phone'
                ref={this.phoneRef}
                type='text'
                className='validate'
              />
              <label htmlFor='phone'>Phone</label>
            </div>
            <div className='input-field col s6'>
              <input
                id='email'
                ref={this.emailRef}
                type='text'
                className='validate'
              />
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
          >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
