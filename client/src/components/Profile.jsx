import React from 'react';


const Profile = (props) => {
  return (
    <div className="profile">
    <h2>{props.user}</h2>
    {/* <ul>{props.profile.routines}</ul> */}
    </div>
  )
}
export default Profile;
