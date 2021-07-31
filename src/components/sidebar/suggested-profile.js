import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SuggestedProfile({ userDocId, username, profileId }) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);
  }

  return !followed ? (
    <div className="align-items flex flex-row items-center justify-between">
      <div className="flex items-center justify-between">
        <img className="flex w-8 mr-3 rounded-full"
          src={`/images/avatars/${username}.jpg`}
          alt={`Follow ${username}`}
        />
        <Link to={`/p/${username}`}>
            <p className="text-sm font-bold">{username}</p>
        </Link>
      </div>
      <div className="flex">
        <button className="text-sm" type="button" onClick={handleFollowUser}>
          Follow
        </button>
      </div>
    </div>
  ) : null;
};