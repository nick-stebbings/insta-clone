import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Post from './post';
import useFollowedUserPhotos from '../hooks/use-followed-users-photos';

export default function Timeline() {
  const { photos } = useFollowedUserPhotos();
  return (
    <div className="container col-span-2 px-4">
      {photos ? (
        photos.map((photoInfo) => (
          <Post key={photoInfo.docId} content={photoInfo} />
        ))
      ) : (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      )}
    </div>
  );
}
