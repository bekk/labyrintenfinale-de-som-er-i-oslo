import React from 'react';
import { Search, User } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo & static nav links */}
      <div className="flex items-center">
        <div className="h-8 w-auto">
          <svg viewBox="0 0 35 14" className="h-full" width="2.188em" height="0.875em" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M31.0878023 7.55918018c-.2517074-.42642875-.2661333-.68861697-.02338-1.10029556L34.399462 1h-4.6267395s-2.7797248 4.54205453-3.1597731 5.17316245c-.3764003.63027925-.3601505 1.02273292.0154208 1.67041405C27.0084185 8.49042897 29.7727225 13 29.7727225 13h4.6267395s-3.2751804-5.37353258-3.3116597-5.44081982M21.5941377 13h4.2077247V1h-4.2077247M18.9405537.77010873c-1.3163763 0-2.3817762 1.07539896-2.3817762 2.40310754 0 1.32687533 1.0653999 2.4056073 2.3817762 2.4056073 1.3185428 0 2.3884423-1.07873197 2.3884423-2.4056073 0-1.32770858-1.0698995-2.40310754-2.3884423-2.40310754M12.0635332 13h4.2052375V1h-4.2052375M0 13h4.19744416V1H0M9.50872938 2.92796177C9.29333553 1.82832914 8.33144198 1 7.17852938 1H4.47507953l2.71654925 12h4.56969912L9.50872938 2.92796177z" />
          </svg>
        </div>
        <ul className="flex ml-8 space-x-6">
        </ul>
      </div>

      {/* Search & user icon */}
      {/* <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 placeholder-gray-400 text-white rounded-full pl-10 pr-4 py-1 focus:outline-none"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        <User className="w-6 h-6 text-white" />
      </div> */}
    </nav>
  );
};

export default NavBar;
