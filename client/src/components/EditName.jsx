import React, { Component } from 'react'

// This component is the input bar that appears when editing the name of a saved routine.

class EditName extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: this.props.routineName
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange for allowing form to receive inputs.

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  // handleSubmit for changing the actual routine name.
  // The toggleMode is to designate which saved routine is being editted.
  // Therefore, there can only be one input field open at a time.

  handleSubmit(e){
    e.preventDefault()
    this.props.updateName(this.props.id, e.target.name.value)
    this.props.toggleMode(null)
  }

  // Conditional rendering on the form.

  render(){
    return (
      <div>
        {this.props.edit === this.props.id ? (
          <form onSubmit={(e) => this.handleSubmit(e)} >
            <input
              type="text"
              name="name"
              value={this.state.name || ""}
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="submit"
              value="SUBMIT"
            />
          </form>
        ) : (
          <div>
            <p>{this.props.routineName}</p>
            <button
              onClick={() => {this.props.toggleMode(this.props.id)}} >Rename</button>
          </div>
        )}
      </div>
    )
  }

}

export default EditName
