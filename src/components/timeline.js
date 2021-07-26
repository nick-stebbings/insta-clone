import React from 'react';
import Skeleton from 'react-loading-skeleton';

import useFollowedUserPhotos from '../hooks/use-followed-users-photos';

export default function Timeline() {
  const { photos } = useFollowedUserPhotos();

  return (
    <div className="container col-span-2">
      {photos ? (
        photos.map((content) => <p>Phto</p>)
      ) : (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      )}
    </div>
  );
}
