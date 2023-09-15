import React from 'react';
import Profile from './Profile/Profile';
import Settings from './Profile/Settings';
import BasicModal from './Exercises/Module1';
import ExerciseList from './Exercises';


function ContentArea({ selectedItem }) {
  return (
    <div className="w-3/4 pl-4 h-full ml-2">
    
      {selectedItem === 'profile' && <Profile />}
      {selectedItem === 'settings' && <Settings user="Tanaya" />}
      {selectedItem === 'exercise' && <ExerciseList />}
      {/* You can add more components for different menu items */}
   
      
    </div>
  );
}

export default ContentArea;

