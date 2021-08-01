import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { getUserByUserName } from '../services/firebase';

import Header from '../components/header.js';
import UserProfile from '../components/profile';

export default function Profile() {
  const { username } = userParams();
  const [userExists, setUserExists] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExistsToLoadProfile() {
      const doesUserExist = await getUserByUserName(username);
      if (!doesUserExist) {
        history.push(ROUTES.NOT_FOUND)
      } else {
        setUserExists(doesUserExist);
      }
    };
    checkUserExistsToLoadProfile();
  }, [username, history]);

  return userExists ? (
    <div className="bg-gray">
      <Header />
      <div className="max-w-screen-lg mx-auto">
        <UserProfile username={username} />
      </div>
      
    </div>
  ) : null;
}
