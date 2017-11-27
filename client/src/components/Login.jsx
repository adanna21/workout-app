import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'

class Login extends Component {

  // constructor & state
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
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
        <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
          <input
            className='text-input'
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
            type='submit'
            value='Log In!'
          />
        </form>
      </div>
    )
  }

}

export default Login
