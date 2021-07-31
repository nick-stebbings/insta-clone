import React, { memo, useState, useEffect } from 'react';
import SuggestedProfile from './suggested-profile';
import { getSuggestedProfiles } from '../../services/firebase';
import Skeleton from 'react-loading-skeleton';

const Suggestions = function ({ userId }) {
  const [profiles, setProfiles] = useState([
        {
            docId: '1',
            userDocId: 1,
            username: 'Dali',
            profileId: '2',
            userId: '3'
        },
        {
            docId: '1',
            userDocId: 1,
            username: 'Orwell',
            profileId: '3',
            userId: '3'
        },
    ]);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId);
      setProfiles(response);
    };

    userId && suggestedProfiles();
  }, []);

  return !profiles ? (
    <Skeleton className="mt-5" count={3} height={150} />
  ) : (
    profiles.length > 0 && (
      <div className="flex flex-col">
        <div className="align-items flex items-center justify-between mt-2 mb-2">
          <p className="text-sm font-semibold text-gray-600">Suggestions for you</p>
        </div>
        <div className="grid gap-5 mt-4">
          {profiles.map((profile) => (
            <SuggestedProfile
              key={profile.docId}
              userDocId={profile.docId}
              username={profile.username}
              profileId={profile.userId}
              userId={userId}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default memo(Suggestions);