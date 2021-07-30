import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import AddComment from './add-comment';

export default function Comments({ docId, comments: allComments, posted, commentInput }) {
  const [comments, setComments] = useState(allComments)

  return (
    <div className="pt-1 pt-4 pb-4">
      {comments.length >= 3 && (
        <p className="mb-1 text-sm text-gray-500 cursor-pointer">
          View all {comments.length} comments
        </p>
      )}
      {comments.slice(0, 3).map((item) => (
        <p
          key={`${item.comment}-${item.displayName}`}
          className="mb-1">
          <Link to={`/p/${item.displayName}`}>
            <span className="mr-1 font-bold">{item.displayName}</span>
          </Link>
          <span className="ml-1">{item.comment}</span>
        </p>
      ))}
    </div>
  );
}
