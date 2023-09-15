import React from 'react';

function Sidebar({ selectedItem, handleItemClick }) {
  return (
    <div className="bg-yellow-100 w-1/6 p-4 rounded-md h-[700px]">
      <h2 className="text-5xl font-bold">Lingo Learn</h2>
      <ul className="mt-4">
        <li
          className={`cursor-pointer p-2 rounded-md m-2 ${
            selectedItem === 'profile' ? 'bg-yellow-400 text-white' : ''
          }`}
          onClick={() => handleItemClick('profile')}
        >
          Profile
        </li>
        <li
          className={`cursor-pointer p-2 rounded-md m-2 ${
            selectedItem === 'settings' ? 'bg-yellow-400 text-white' : ''
          }`}
          onClick={() => handleItemClick('settings')}
        >
          Settings
        </li>
        <li
          className={`cursor-pointer p-2 rounded-md m-2 ${
            selectedItem === 'exercise' ? 'bg-yellow-400 text-white' : ''
          }`}
          onClick={() => handleItemClick('exercise')}
        >
          Exercises
        </li>
        <li
          className="cursor-pointer p-2 rounded-md m-2 hover:bg-gray-300"
          onClick={() => handleItemClick('logout')}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
