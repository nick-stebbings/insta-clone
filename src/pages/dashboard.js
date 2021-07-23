import React from 'react';
import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';

export default function Dashboard() {

  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <div className="app bg-red-500">
      <p>Test</p>
    </div>
  );
}
