import { firebase, FieldValue } from '../lib/firebase';

export async function getUserByUserId(uid) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', uid)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
};

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
};

export async function getUserFollowedPhotos(uid, followingUserIds) {
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', followingUserIds)
    .get();

  const userFollowedPhotos = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return userFollowedPhotos;
};