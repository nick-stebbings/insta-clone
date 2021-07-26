import React, {useRef} from 'react';

import Header from './header';
import Image from './image';
import Footer from './footer';
import Actions from './actions';
// import Comments from './comments';

export default function Post({ content }) {
  const commentInput = useRef(null);

  const handleFocus = () => commentInput.current.focus();

  return (
    <div className="col-span-4 mb-16 bg-white border border-gray-500 rounded">
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer caption={content.caption} username={content.username} />
    </div>
  );
}
