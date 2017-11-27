import React, { Component } from 'react'

class Register extends Component {

  // constructor & state
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    // a bind
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  // so the form can update properly
  handleInputChange (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  // rendering form
  render () {
    return (
      <div className='form-container'>
        <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
          <h1>Create an account</h1>
          <input
            type='text'
            name='username'
            value={this.state.username}
            placeholder='Username'
            onChange={this.handleInputChange}
            required
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            placeholder='Password'
            onChange={this.handleInputChange}
            required
          />
          <input
            type='email'
            name='email'
            value={this.state.email}
            placeholder='e-mail'
            onChange={this.handleInputChange}
            required
          />
          <input
            type='submit'
            value='Register!'
          />
        </form>
      </div>
    )
  }

}

export default Register
