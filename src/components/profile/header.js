import React, { useState, useEffect } from 'react';

export default function Header({ photosCount, profile, followerCount, setFollowerCount, username }) {
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);

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
        </div>
      </div>
    </div>
  );
}
