import React, { useEffect } from 'react';
import Header from '../components/header';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found';
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <div className="max-w-screen-lg mx-auto">
          <p className="text-2xl text-center">Not Found!</p>
        </div>
      </div>
    </>
  );
}
