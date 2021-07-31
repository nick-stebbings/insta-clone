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
      <div className="grid">
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
  )
  )
};

export default memo(Suggestions);