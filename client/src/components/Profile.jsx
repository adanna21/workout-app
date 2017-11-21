
import React from 'react'

const Profile = (props) => {
  return (
    <div className='profile'>
      <h2>Welcome {props.user.username}</h2>
    </div>
  )
}
export default Profile
