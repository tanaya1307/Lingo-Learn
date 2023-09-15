import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import image from '../../images/daily-female-avatar-1.png'
import coins from '../../images/silky-falling-coins.png'

const Profile = () => {
 // Retrieve user data from local storage and parse it
const userDataString = localStorage.getItem('userData');
const userData = userDataString ? JSON.parse(userDataString) : null;

// Check if userData is not null and contains a 'username' property
const username = userData && userData.username;

// Use the 'username' variable in your component
const [name, setName] = useState(username || "");


  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="text-center">
      <Avatar alt="Remy Sharp" src={image}  sx={{ width: 100, height: 100 }} />
     
      </div>
      <span> <h2 className="text-xl font-semibold p-4">{name}</h2></span>
      <div className="mt-4">
       <img src={coins} width={'40px'}/>
      </div>
    </div>
  );
};

export default Profile;
