import React, { useState, useContext } from 'react';

import useUser from '../../hooks/use-user';

export default function Header({ photosCount, profile, followerCount, setFollowerCount, username }) {
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  const { user } = useUser();
  const activeBtnFollow = user.username && user.username !== username;

  return (
    <div className="grid justify-between max-w-screen-lg grid-cols-3 gap-4 mx-auto">
      <div className="container flex justify-center">
        <img
          className="flex w-40 h-40 rounded-full"
          alt={`${username} profile picture`}
          src={`/images/avatars/${username}.jpg`}
        />
      </div>
      <div className="flex flex-col items-center justify-center col-span-2">
        <div className="container flex items-center">
          <p className="mr-4 text-2xl">{username}</p>
          {activeBtnFollow && (
            <button
              className="w-20 h-8 text-sm font-bold text-white bg-blue-500 rounded"
              type="button"
              onClick={() => console.log('I am a button')}
            >
              {isFollowingProfile ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
