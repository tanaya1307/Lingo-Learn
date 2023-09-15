// AuthComponent.js
import React from 'react';
import Login from './Login';
import { Registration, GoogleAuthButton } from './Registration';
import GlassContainer from '../common/container';
import image from '../images/sprinting.svg'
const AuthComponent = ({ onLogin }) => {
  return (
   
     <div className='grid grid-cols-2 gap-1'>
     <div>
     <GlassContainer>
      <Login onLogin={onLogin} />
      <Registration />
      <GoogleAuthButton />
    </GlassContainer>
     </div>
     <div>
       <h1 className='text-6xl font-bold m-4'>Welcome to Lingo-Learn</h1>
       <img
         src={image}
       
         className="w-full"
       />
     </div>
   </div>
  );
};

export default AuthComponent;
