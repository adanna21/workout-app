import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
          <h1>LOGIN TO ACCOUNT</h1>
          <input
            type='text'
            name='username'
            value={this.state.username}
            placeholder='username'
            onChange={this.handleInputChange}
            required
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            placeholder='password'
            onChange={this.handleInputChange}
            required
          />
          <h2>No account? <Link to='/register'>Register here</Link></h2>
          <input
            type='submit'
            value='Login'
            className='submit-btn'
          />
        </form>
      </div>
    )
  }

}

export default Login
