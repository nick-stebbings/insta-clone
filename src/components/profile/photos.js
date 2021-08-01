import React from 'react';
import { Link } from 'react-router-dom';

export default function Photos({ username }) {
  return (
    <div className="flex h-4 p-4 py-8 border-b">
      <div className="flex items-center">
        <Link to={`/p/${username}`}>
          <img
            src={`images/avatars/${username}.jpg`}
            alt={`${username} - profile picture`}
            className="flex w-8 h-8 mr-3 rounded-full"
          />
        </Link>
        <p className="font-bold">{username}</p>
      </div>
    </div>
  );
}
