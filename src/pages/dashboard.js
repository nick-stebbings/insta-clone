import React, { useEffect } from 'react';
import Header from '../components/header.js';
import Timeline from '../components/timeline.js';
import Sidebar from '../components/sidebar/index.js';

export default function Dashboard() {

  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="grid justify-between max-w-screen-lg grid-cols-3 gap-4 mx-auto">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}
