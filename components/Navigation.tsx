import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-950 border-b border-blue-900 shadow-[0_0_20px_2px_rgba(59,130,246,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
                Web3 Token App
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium nav-link ${
                  pathname === '/'
                    ? 'nav-link-active border-b-2'
                    : 'border-transparent hover:border-gray-600'
                }`}
              >
                Home
              </Link>
              <Link
                href="/docs"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium nav-link ${
                  pathname === '/docs'
                    ? 'nav-link-active border-b-2'
                    : 'border-transparent hover:border-gray-600'
                }`}
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 