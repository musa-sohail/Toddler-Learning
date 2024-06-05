import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setEmail(user.email);
        
        // Retrieve start time from local storage or set it if not present
        const storedStartTime = localStorage.getItem("startTime");
        const startTime = storedStartTime ? parseInt(storedStartTime, 10) : Date.now();
        
        // Store the start time in local storage
        if (!storedStartTime) {
          localStorage.setItem("startTime", startTime);
        }
        
        // Start tracking time spent
        const interval = setInterval(() => {
          setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);

        return () => clearInterval(interval);
      } else {
        setIsLoggedIn(false);
        setEmail("");
        setTimeSpent(0);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoggedIn(true);
        setError(""); // Clear error message
      })
      .catch((error) => {
        // Handle different error codes
        switch (error.code) {
          case "auth/user-not-found":
            setError("User not found. Please sign up.");
            break;
          case "auth/wrong-password":
            setError("Invalid password. Please try again.");
            break;
          default:
            setError("An error occurred. Please try again later.");
            break;
        }
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error message
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // Clear error message
  };

  const handleLogout = () => {
    auth.signOut();
    setIsLoggedIn(false);
    localStorage.removeItem("startTime"); // Clear the start time from local storage
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg w-full max-w-4xl flex">
        {isLoggedIn ? (
          <>
            <div className="w-1/3 bg-sky-100 p-8 flex flex-col items-center justify-center h-full">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="images/avt.png"
                  alt="User Avatar"
                  className="rounded-full w-24 h-24 border-4 border-blue-500 hover:border-sky-800 transition duration-300"
                />
              </div>
              <div className="text-center w-full">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  Username: <span className="text-gray-600">{email.split('@')[0]}</span>
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  Email: <span className="text-gray-600">{email}</span>
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-6">
                  Password: <span className="text-gray-600">**********</span>
                </p>
              </div>
            </div>
            <div className="w-2/3 p-8 flex flex-col items-center justify-center bg-white">
              <h1 className="text-3xl font-bold text-sky-600 mb-6">
                Welcome To Toddler's Learning
              </h1>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Time Spent: {timeSpent} seconds
              </h2>
              <button
                onClick={handleLogout}
                className="px-6 py-3 text-white bg-sky-600 rounded-md hover:bg-sky-800 focus:outline-none focus:bg-sky-800 transition duration-300"
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <div className="w-full p-8">
            <h1 className="text-3xl font-bold text-sky-600 mb-6">
              Login
            </h1>
            <form onSubmit={signIn}>
              <input
                onChange={handleEmailChange}
                type="email"
                placeholder="Enter Your Email"
                value={email}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
              />
              <input
                onChange={handlePasswordChange}
                type="password"
                placeholder="Enter Your Password"
                value={password}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-sky-600 rounded-md hover:bg-sky-800 focus:outline-none focus:bg-sky-800"
              >
                Log In
              </button>
            </form>
            <p className="mt-4 text-dark">
              New Here?{" "}
              <Link to="/signup" className="text-sky-500">
                Sign Up
              </Link>
            </p>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
