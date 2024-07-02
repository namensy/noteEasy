import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = e.target[0].value;
    const enteredPassword = e.target[1].value;

    setUsername(enteredUsername);
    setPassword(enteredPassword);

    // Mock authentication check
    if (
      enteredUsername === e.target[0].value &&
      enteredPassword === e.target[1].value
    ) {
      // Redirect to notes page on successful login
      navigate("/welcome", { state: { username: enteredUsername } });
    } else {
      alert("Invalid username or password");
    }
  };

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(username));
  }, [username]);

  return (
    <div>
      <div className="mt-[20%] container mx-auto ">
        <h1 className="text-center p-2 font-bold text-3xl mb-4">Login Form</h1>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="mb-2 px-3 pr-[10em] py-3 rounded-md border block"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-2 px-3 pr-[10em] py-3 rounded-md border block"
              required
            />
            <button
              className="block p-2 rounded-md bg-blue-500 w-full text-white font-bold hover:bg-blue-600"
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
