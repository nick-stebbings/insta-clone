import React, { useState, useEffect, useContext } from 'react';
import useUser from '../../hooks/use-user';

export default function Sidebar() {
  const { user: { docId, userId, following, username, fullName } = {} } =
    useUser();
console.log(docId, userId, following, username, fullName);
  return (
    <div className="app bg-green-500">
      <p>Test from sidebar</p>
    </div>
  );
}
