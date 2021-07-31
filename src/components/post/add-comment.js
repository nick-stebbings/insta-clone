import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import { getUserByUserId } from '../../services/firebase';
import UserContext from '../../context/user';

export default function AddComment({ docId, comments, setComments, commentInput }) {
  const [comment, setComment] = useState('');
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { uid: userId = '' },
  } = useContext(UserContext);

  const handleSubmitComment = async(event) => {
    event.preventDefault();
    const [activeUser] = await getUserByUserId(userId);
    const displayName = activeUser.username;
    setComments([{ displayName, comment }, ...comments]);
    setComment('');

    return firebase
      .firestore()
      .collection('photos')
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
      });
  };

  return (
    <div className="border-t border-gray-500">
      <form
        className="flex justify-between w-full pl-0 pr-5"
        onSubmit={(event) => {
          comment.length >= 3 ? handleSubmitComment(event) : event.preventDefault()
        }}
        method="POST"
      >
        <input
          aria-label="Add a comment"
          autoComplete="off"
          className="text-gray w-full px-4 py-5 mr-3 text-sm"
          type="text"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-300 ${!comment && 'opacity-25'}`}
          type="button"
          disabled={comment.length < 3}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}
