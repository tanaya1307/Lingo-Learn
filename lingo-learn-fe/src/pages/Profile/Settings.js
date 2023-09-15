import React, { useState } from 'react';

const Settings = ({ user }) => {
  const [newUsername, setNewUsername] = useState(user.username);
  const [newLanguage, setNewLanguage] = useState(user.language);
  const [newAvatar, setNewAvatar] = useState(null);

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setNewLanguage(e.target.value);
  };

  const handleAvatarChange = (e) => {
    // Handle avatar upload here and set the new avatar URL
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Send updated settings to the server
    const updatedSettings = {
      username: newUsername,
      language: newLanguage,
      avatar: newAvatar,
    };

    // Call a function (e.g., onUpdateProfile) to update the user's profile
    // onUpdateProfile(updatedSettings);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="font-semibold block">Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
        />
        {newAvatar && (
          <img
            src={newAvatar}
            alt="New Avatar"
            className="w-32 h-32 rounded-full mt-2"
          />
        )}
      </div>
      <div className="mb-4">
        <label className="font-semibold block">Username</label>
        <input
          type="text"
          value={newUsername}
          onChange={handleUsernameChange}
          className="w-full border rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold block">Language Preference</label>
        <input
          type="text"
          value={newLanguage}
          onChange={handleLanguageChange}
          className="w-full border rounded-md p-2"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600"
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
