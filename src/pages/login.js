import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    document.title = 'Instagram - Log In'
  }, []);

  return (
    <div className="md:flex-no-wrap md:flex-row md:mx-auto container flex flex-row-reverse flex-wrap items-center justify-center h-screen max-w-screen-md mx-6 my-2">
      <div className="md:w-3/5 flex w-full">
        <img className="object-cover" src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
      </div>
      <div className="md:w-2/5 container flex flex-col w-full">
        <h1 className="flex justify-center w-full">
          <img className="w-6/12 mt-2 mb-4" src="./images/logo.png" alt="Instagram" />
        </h1>
        <div className="login-form-wrapper flex w-full py-2">
          <form className="flex flex-col flex-no-wrap w-full" method="POST">
            <input
              aria-label="Enter your email address"
              className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded"
              type="text"
              name="username"
              placeholder={'Enter your username'}
            />
            <input
              className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded"
              type="password"
              name="password"
              placeholder={'Enter your password'}
            />
            <button
              className={
                isInvalid
                  ? 'w-full h-8 font-bold text-white bg-blue-500 rounded opacity-50'
                  : 'w-full h-8 font-bold text-white bg-blue-500 rounded'
              }
              disabled={isInvalid}
              type="submit"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="signup-link-wrapper flex flex-col items-center justify-center w-full p-4 bg-white border">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to={ROUTES.SIGN_UP} className="font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
