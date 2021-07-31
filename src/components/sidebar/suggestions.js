import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSuggestedProfiles } from '../../services/firebase';
import Skeleton from 'react-loading-skeleton';

const Suggestions = function ({ userId }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId);
      setProfiles(response);
    };

    userId && suggestedProfiles();
  }, [userId]);

  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (

  );
};

export default memo(Suggestions);