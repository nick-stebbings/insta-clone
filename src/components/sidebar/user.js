import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export default function User({ username, fullName }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`/p/${username}`} className="grid items-center grid-cols-4 gap-4 mb-4">
      <div className="flex items-center justify-between col-span-1">
        <img className="flex w-16 mr-3 rounded-full" src={`/images/avatars/${username}.jpg`} alt="My profile" />
      </div>
      <div className="col-span-3">
        <p className="text-sm font-bold">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
};