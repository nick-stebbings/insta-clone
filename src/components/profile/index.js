import React, { useReducer, useEffect } from 'react';
import Header from './header';
import Photos from './photos';

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
  profile: {},
  photosCollection: [],
  followerCount
}

export default function UserProfile({ username }) {
  const [{ profile, photosCollection, followerCount }] = userReducer(
    reducer,
    initialState
  );

  return (
    <>
      <Header />
      <Photos />
    </>
  )
}
