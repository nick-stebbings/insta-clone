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
}

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

export async function getSuggestedProfiles(userId) {
  const result = await firebase.firestore().collection('users').limit(10).get();
  const [{ following }] = await getUserByUserId(userId);

  return result.docs
    .map((user) => ({ docId: user.id, ...user.data()}))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}

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

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      const userLikedPhoto = photo.likes.includes(uid);
      const photoAuthors = await getUserByUserId(photo.userId);
      return {
        ...photo,
        username: photoAuthors[0].username,
        userLikedPhoto,
      };
    })
  );

  return photosWithUserDetails;
}

export async function getUserIdByUserName(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  const [{ userId = null }] = result.docs.map((item) => ({
    ...item.data(),
  }));

  return userId;
}

export async function getUserPhotosByUserName(username) {
  const uid = await getUserIdByUserName(username);

  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', '==', uid)
    .get();

  const photos = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return photos;
}

export async function getUserByUserName(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user.length > 0 ? user : false;
}

export async function updateUserFollowing(
  docId,
  profileId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(docId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateFollowedUserFollowing(
  docId,
  followingUserId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(docId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(followingUserId)
        : FieldValue.arrayUnion(followingUserId)
      });
}