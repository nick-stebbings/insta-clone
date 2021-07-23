import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Header() {
  const { firebase } = useContext(FirebaseContext);

  return (
    <header className="h-16 mb-8 bg-white border-b">
      <div className="max-width-lg container h-full mx-auto">
        <div className="flex justify-between h-full">
          <div className="align-items flex items-center">
            <h1>
              <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                <img className="w-6/12 mt-2" src="../images/logo.png" alt="Instagram" />
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
