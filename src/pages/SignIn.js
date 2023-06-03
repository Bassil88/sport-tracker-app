import React, { useState } from 'react';
import SignUp from './SignUp';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication success
    if (email === 'example@example.com' && password === 'password') {
      alert('Authentication successful!');
      resetForm();
    } else {
      alert('Authentication failed!');
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      resetForm();
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      {!showSignUp && (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-gradient-to-tl from-sky-900 via-gray-900 bg-opacity-80 p-12 rounded-xl">
          <h1 className="text-center text-4xl font-bold leading-9 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            Sign In
          </h1>
          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-m font-medium leading-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                Email:
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 bg-sky-100 bg-opacity-30 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-m font-medium leading-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                Password:
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 bg-sky-100 bg-opacity-30 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-m bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            <p>Don't have an account?</p>
            <button
              onClick={handleToggleSignUp}
              className="font-semibold leading-6 text-yellow-700 hover:text-3xl text-white"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      {showSignUp && <SignUp />}
    </div>
  );
};

export default SignIn;
