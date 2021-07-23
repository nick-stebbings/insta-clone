import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorStatus, setErrorStatus] = useState('');
  const isInvalid = password === '' || email === '';

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      // await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setErrorStatus(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Instagram - Sign Up';
  }, []);

  return (
    <div className="container flex items-center h-screen max-w-xs mx-auto">

      <div className="md:w-2/5 container flex flex-col w-full">
        <h1 className="flex justify-center w-full">
          <img
            className="w-6/12 mt-2 mb-4"
            src="./images/logo.png"
            alt="Instagram"
          />
        </h1>
        {/* {errorStatus && <p className="mb-4 text-xs text-red-500">{errorStatus}</p>} */}
        <div className="signup-form-wrapper flex w-full py-2">
          {/* <form onSubmit={handleLogin} className="flex flex-col flex-no-wrap w-full" method="POST">
            <input
              aria-label="Enter your email address"
              className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded"
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded"
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button
              className={
                isInvalid
                  ? 'w-full h-8 cursor-not-allowed font-bold text-white bg-blue-500 rounded opacity-50'
                  : 'w-full h-8 font-bold text-white bg-blue-500 rounded'
              }
              disabled={isInvalid}
              type="submit"
            >
              Log In
            </button>
          </form> */}
        </div>
        <div className="signup-link-wrapper flex flex-col items-center justify-center w-full p-4 bg-white border">
          <p className="text-sm">
            Don't have an account?{' '}
            {/* <Link to={ROUTES.SIGN_UP} className="font-bold">
              Sign Up
            </Link> */}
          </p>
        </div>
    </div>
  </div>
  );
}
