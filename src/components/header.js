import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import * as ROUTES from '../constants/routes';

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const user = null;

  return (
    <header className="h-16 mb-8 bg-white border-b">
      <div className="max-width-lg container h-full mx-auto">
        <div className="flex justify-between h-full">
          <div className="align-items flex items-center">
            <h1>
              <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                <img className="w-6/12 mt-2 ml-2" src="../images/logo.png" alt="Instagram" />
              </Link>
            </h1>
          </div>
          <div className="align-items flex items-center text-center text-gray-100">
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD} aria-label="Home">
                  <p>Dashboard</p>
                </Link>
                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      firebase.auth().signOut();
                    }
                  }}
                  className="w-20 h-8 text-sm font-bold text-white bg-blue-500 rounded"
                >
                  Sign Out
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      className="flex w-8 h-8 rounded-full"
                      src={`/images/avatars/${user.displayName}.jpg`}
                      alt={`${user.displayName} profile picture`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button type="button" className="w-20 h-8 text-sm font-bold text-white bg-blue-500 rounded">
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button type="button" className="bg-gray-50 w-20 h-8 mx-2 text-sm font-bold text-white text-blue-500 border rounded">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
