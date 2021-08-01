import React, { useEffect } from 'react';
import Header from '../header.js';
import Photos from './photos';

export default function UserProfile({ username }) {
  return (
    <>
      <Header />
      <Photos />
    </>
  )
}
