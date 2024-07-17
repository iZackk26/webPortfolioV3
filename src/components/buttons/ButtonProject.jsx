import React from 'react';
import { Button, ConfigProvider, Space } from 'antd';
import '../../index.css'


export default function ButtonProject({ text, linkTo }) {
  return (
    <a
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-m px-3 py-1.5 me-1 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 gradient-shadow"
    >
      {text}
    </a>
  );

}
