// Navbar.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

interface NavbarProps {
  activeTab?: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab = 'series' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let navigate = useNavigate()
  
  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href='/series'>
                <span className="text-white font-bold text-xl">NRK Sentiment</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a 
                  href="/series" 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'series' 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  TV-serier
                </a>
                <a 
                  href="/admin" 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'analytics' 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Analytics
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none">
                    <span className="sr-only">Åpne brukermeny</span>
                    <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
                      A
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Åpne hovedmeny</span>
              <svg 
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeTab === 'series' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            TV-serier
          </a>
          <a 
            href="#" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeTab === 'analytics' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Analytics
          </a>
          <a 
            href="#" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeTab === 'reports' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Rapporter
          </a>
          <a 
            href="#" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeTab === 'settings' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Innstillinger
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
                A
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">Admin Bruker</div>
              <div className="text-sm font-medium leading-none text-gray-400">admin@nrk.no</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;