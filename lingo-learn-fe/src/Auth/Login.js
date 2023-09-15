import axios from "axios";
import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post(
        "http://localhost:8000/auth/login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        onLogin(res.data); // Pass user data to the parent component
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <div className="container mx-auto p-6 rounded-lg">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
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
          onClick={handleLogin}
          className="w-full bg-black text-white text-xl py-2 rounded-md hover:bg-gray-800 focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

