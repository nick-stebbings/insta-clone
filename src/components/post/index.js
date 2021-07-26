import React from 'react';
import useUser from '../../hooks/use-user';

import Header from './header';
import Image from './image';
import Footer from './footer';
// import Actions from './actions';
// import Comments from './comments';

export default function Post({ content }) {
  return (
    <div className="col-span-4 mb-16 bg-white border border-gray-500 rounded">
      <Image src={content.imageSrc} caption={content.caption} />
      <Footer caption={content.caption} username={content.username} />
    </div>
  );
}
