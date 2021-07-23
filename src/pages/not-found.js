import React, { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found';
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-lg mx-auto">
        <p>Not Found!</p>
      </div>
    </div>
  );
}
