import React, { useState, useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import useUser from '../../hooks/use-user';

export default function Header({
  photosCount,
  profile: { docId: profileDocId, userId: profileUserId, fullName, following = [] },
  followerCount,
  setFollowerCount,
  username,
}) {
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  const { user } = useUser();
  const activeBtnFollow = user.username && user.username !== username;
    
  const handleToggleFollow = async () => {
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
    setFollowerCount({ followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1 });
  };

  return (
    <div className="grid justify-between max-w-screen-lg grid-cols-3 gap-4 mx-auto">
      <div className="container flex justify-center">
        <img className="flex w-40 h-40 rounded-full" alt={`${username}`} src={`/images/avatars/${username}.jpg`} />
      </div>
      <div className="flex flex-col items-center justify-center col-span-2">
        <div className="container flex items-center">
          <p className="mr-4 text-2xl">{username}</p>
          {activeBtnFollow && (
            <button
              className="w-20 h-8 text-sm font-bold text-white bg-blue-500 rounded"
              type="button"
              onClick={handleToggleFollow}
            >
              {isFollowingProfile ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>
        <div className="container flex mt-4">
          {followerCount === undefined || following === undefined ? (
            <Skeleton count={1} width={677} height={24} />
          ) : (
            <>
              <p className="mr-10">
                <span className="font-bold">{photosCount}</span> photos
              </p>
              <p className="mr-10">
                <span className="font-bold">{followerCount}</span> followers
              </p>
              <p className="mr-10">
                <span className="font-bold">{following.length}</span> following
              </p>
            </>
          )}
        </div>
        <div className="container mt-4">
          <p className="font-medium">{!fullName ? <Skeleton count={1} height={24} /> : fullName}</p>
        </div>
      </div>
    </div>
  );
}
