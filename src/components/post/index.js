import React, { useState, useEffect, useContext } from 'react';
import useUser from '../../hooks/use-user';

import Header from './header';
import Footer from './footer';
import Image from './image';
import Actions from './actions';
import Comments from './comments';

export default function Post({ content }) {
  return (
    <div className="app bg-green-500">
      <p>Test from post</p>
    </div>
  );
}
