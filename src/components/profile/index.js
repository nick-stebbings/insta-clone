import React, { useReducer, useEffect } from 'react';
import { getUserByUserName, getUserPhotosByUserName } from '../../services/firebase';
import Header from './header';
import Photos from './photos';

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
  profile: {},
  photosCollection: [],
  followerCount: 0
}

export default function UserProfile({ username }) {
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const [{ ...user }] = await getUserByUserName(username);
      const photos = await getUserPhotosByUserName(username);
      console.log('user :>> ', photos);
    };
    getProfileInfoAndPhotos();
  }, [username]);

  return (
    <>
      <Header />
      <Photos />
    </>
  )
}
