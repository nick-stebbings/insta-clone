import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

export default function useFollowedUserPhotos() {
  const { user: { uid: userId } = '' } = userContext(userContext);

  async function getTimelinePhotos() {
    
  }

  useEffect(() => {
    const response = getTimelinePhotos();
  }, [userId]);

  return { photos };
};
