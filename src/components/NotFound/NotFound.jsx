import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl mb-4">Page Not Found</p>
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Go back to Home
          </Link>
        </div>
      );
}
