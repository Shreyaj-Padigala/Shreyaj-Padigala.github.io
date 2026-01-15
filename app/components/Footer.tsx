'use client';

import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2026 Shreyaj Padigala. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center">
            Built with{' '}
            <FaHeart className="text-purple-500 mx-2" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
