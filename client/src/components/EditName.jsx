import React from 'react'

function EditName(props){
  return (
    <form>
      <input type="text" value={props.routine.name} />
      <input type="submit" value="SUBMIT" />
    </form>
  )
}

export default EditName
