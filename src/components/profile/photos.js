import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Photos({ photos }) {
  return (
    <div className="border-gray h-16 pt-4 mt-12 border-t">
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        {!photos && console.log('!photos :>> ', photos)}
        {!photos ? (
          <>
            {[...new Array(9)].map((_, index) => (
              <Skeleton key={index} count={1} width={320} height={400} />
            ))}
          </>
        ) : photos && photos.length > 0 ? (
          photos &&
          photos.map((photo) => (
            <div key={photo.docId} className="group relative">
              <img src={photo.imageSrc} alt={photo.caption} />
            </div>
          ))
        ) : null}
      </div>
      {!photos ||
        (photos && photos.length === 0 && (
          <p className="text-2xl text-center">No Photos Yet</p>
        ))}
    </div>
  );
}
