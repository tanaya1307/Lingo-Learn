import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthComponent from './Auth/AuthComponent'; // Import the new component
import "tailwindcss/tailwind.css"
import MainComponent from './pages/MainComponent';

// App Component
const App = () => {
  const [user, setUser] = useState(null);

  const fetchUserData = () => {
    axios
      .get('http://localhost:8000/user', {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem('userData', JSON.stringify(res.data));
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      <div className='h-full'>
        {user != null ? (<>
         
          <MainComponent/>
        </>
         
        ) : (
          <>
           <AuthComponent onLogin={handleLogin} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;



