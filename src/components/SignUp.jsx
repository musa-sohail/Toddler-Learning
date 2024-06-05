import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccessMessage(`User ${username} created successfully.`);
        setError("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setUsername("");
      })
      .catch((error) => {
        // Handle different error codes
        if (error.code === "auth/email-already-in-use") {
          setError("User already exists. Please sign in.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-transparent p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-sky-600 mb-6">
          Create Your Account
        </h1>
        <form onSubmit={signUp}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email"
            value={email}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-sky-600"
          />
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter Your Username"
            value={username}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-sky-600"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
            value={password}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-sky-600"
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-sky-600"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-sky-600 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-800"
          >
            Register and Login
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {successMessage && (
            <div className="mt-4 p-4 bg-sky-100 rounded-md">
              <p className="text-sky-600 font-bold">{successMessage}</p>
            </div>
          )}
        </form>
        <div className="mt-4">
          <p className="text-dark">
            Already have an account?{" "}
            <button
              className="text-sky-600 focus:outline-none"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
