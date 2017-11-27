import React, { Component } from 'react'

class EditName extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: this.props.routineName
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.updateName(this.props.id, e.target.name.value)
    this.props.toggleMode(null)
  }

  render(){
    console.log(this.props)
    return (
      <div>
        {this.props.edit === this.props.id ? (
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text" name="name" value={this.state.name || ""} onChange={(e) => this.handleChange(e)}/>
            <input type="submit" value="SUBMIT" />
          </form>
        ):(
          <div>
            <p>{this.props.routineName}</p>
            <button onClick={() => {
              this.props.toggleMode(this.props.id)
              console.log(this.props.edit)
            }}>Rename</button>
          </div>
        )}
      </div>
    )
  }

}

export default EditName
