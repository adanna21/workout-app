import React from 'react';

import { Link } from 'react-router-dom'

const Profile = (props) => {
  return (
    <div className="profile">
    <h2>{props.profile.name}</h2>
    <ul>{props.profile.routines}</ul>
    </div>
  )
}
export default Profile;
