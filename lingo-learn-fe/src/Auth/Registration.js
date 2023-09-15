import axios from "axios";
import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    axios
      .post(
        "http://localhost:8000/auth/register",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("Registration successful:", res.data);
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  };

  return (
    <div className="container mx-auto p-6 rounded-lg">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleRegister}
          className="w-full bg-black text-white text-xl py-2 rounded-md hover:bg-gray-800 focus:outline-none"
        >
          Register
        </button>
      </div>
    </div>
  );
};



  const GoogleAuthButton = () => {
    const handleGoogleAuth = () => {
      window.location.href = 'http://localhost:8000/auth/google';
    };
  
    return (
      <div className="container mx-auto p-6 rounded-lg flex justify-center divide-y-2 divide-solid divide-slate-800">
      <div></div>
      <div>
      <button onClick={handleGoogleAuth}  className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded mt-4 w-full "><GoogleIcon/>Login with Google</button></div>
      </div>
    );
  };
  
  export {Registration, GoogleAuthButton};