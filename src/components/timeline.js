import React, { useState, useEffect, useContext } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Timeline() {
  const photos = [1,2,3,4,5];

  return (
    <div className="container col-span-2">
      {photos ? (
        photos.map((content) => <p>Phto</p>)) :
        (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      )}
    </div>
  );
}
