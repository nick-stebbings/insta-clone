import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [username, setUsername] = useState('');
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorStatus, setErrorStatus] = useState('');
  let isInvalid =
    username === '' || fullname === '' || email === '' || password === '';

  const isLowerCase = (str) => str.toLowerCase() === str;
  const handleFieldValidation = ({ target }) => {
    console.log(target.value.split(' ').length);
    if (target.value.split(' ').length > 1 || !isLowerCase(target.value)) {
      setErrorStatus('Make sure that your username and email address are both lowercase, with no spaces');
    } else {
      setErrorStatus('');
    };
  };
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      
      await response.user.updateProfile({
        displayName: username
      });

      await firebase.firestore().collection('users').add({})
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setUsername('');
      setFullName('');
      setEmail('');
      setPassword('');
      setErrorStatus(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Instagram - Sign Up';
  }, []);

  return (
    <div className="max-w-s container flex items-center justify-center h-screen mx-auto">
      <div className="md:w-2/5 container flex flex-col w-full">
        <h1 className="flex justify-center w-full">
          <img className="w-6/12 mt-2 mb-4" src="./images/logo.png" alt="Instagram" />
        </h1>
        {errorStatus && <p className="mb-4 text-xs text-red-500">{errorStatus}</p>}
        <div className="signup-form-wrapper flex w-full py-2">
          <form onSubmit={handleSignUp} className="flex flex-col flex-no-wrap w-full" method="POST">
            <input
              aria-label="Enter your username"
              className="bg-gray-background w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded"
              type="text"
              name="username"
              value={username}
              placeholder="Enter your user name"
              onChange={(event) => {
                handleFieldValidation(event);
                setUsername(event.target.value);
              }}
            />
            <input
              aria-label="Enter your full name"
              className="bg-gray-background w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded"
              type="text"
              name="fullname"
              value={fullname}
              placeholder="Enter your full name"
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
            <input
              aria-label="Enter your email address"
              className="bg-gray-background w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded"
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(event) => {
                handleFieldValidation(event);
                setEmail(event.target.value);
              }}
            />
            <input
              aria-label="Enter your password"
              className="bg-gray-background w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded"
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
              Sign Up
            </button>
          </form>
        </div>
        <div className="signup-link-wrapper flex flex-col items-center justify-center w-full p-4 bg-white border">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} className="font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
