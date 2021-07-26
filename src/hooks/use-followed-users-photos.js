import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';

export default function useFollowedUserPhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = '' },
  } = useContext(UserContext);

  async function getTimelinePhotos() {
    let followedUserPhotos = [];
    const activeUser = await getUserByUserId(userId);

    if (activeUser[0]?.following && activeUser[0].following.length > 0) {
      followedUserPhotos = await getUserFollowedPhotos(
        userId,
        activeUser[0].following
      );
    }

    followedUserPhotos.sort((a, b) => b.createdAt - a.createdAt);
    return followedUserPhotos;
  }

  useEffect(async () => {
    const response = await getTimelinePhotos();
    console.log('response :>> ', response);
  }, [userId]);

  return { photos };
};
