import React from 'react';
import Skeleton from 'react-loading-skeleton';

import useFollowedUserPhotos from '../hooks/use-followed-users-photos';

export default function Timeline() {
  const { photos } = useFollowedUserPhotos();
console.log('photos :>> ', photos);
  return (
    <div className="container col-span-2">
      {photos ? (
        photos.map((photoInfo) => <p key={photoInfo.docId}>{photoInfo.username}</p>)
      ) : (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      )}
    </div>
  );
}
