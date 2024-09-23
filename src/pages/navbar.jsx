import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaHotel, FaMapSigns, FaUtensils, FaPlane } from 'react-icons/fa';
import '../index.css';

function Navbar() {
  return (
    <nav className="bg-slate-500/20 border border-gray-200 shadow-lg font-bold h-10 rounded-lg w-[60%] mx-auto">
      <div className="container flex items-center justify-between px-4 lg:px-8 h-full">
        
        {/* Mobile menu button (uncomment and adjust as needed)
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-700 rounded-lg lg:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => document.getElementById('navbarNav').classList.toggle('hidden')}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z" clipRule="evenodd"></path>
          </svg>
        </button> */}
        
        <div className="hidden lg:flex w-full items-center mt-2">
          <ul className="flex w-full justify-between space-x-6">
            <li className="nav-item flex items-center space-x-2">
              <FaHome className="text-gray-200 hover:text-green-400" />
              <Link className="text-gray-200 hover:text-green-400" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item flex items-center space-x-2">
              <FaSearch className="text-gray-200 hover:text-green-400" />
              <Link className="text-gray-200 hover:text-green-400" to="/">Search All</Link>
            </li>
            <li className="nav-item flex items-center space-x-2">
              <FaHotel className="text-gray-200 hover:text-green-400" />
              <Link className="text-gray-200 hover:text-green-400" to="/">Hotels</Link>
            </li>
            <li className="nav-item flex items-center space-x-2">
              <FaMapSigns className="text-gray-200 hover:text-green-400" />
              <Link className="text-gray-200 hover:text-green-400" to="/">Things to Do</Link>
            </li>
            <li className="nav-item flex items-center space-x-2">
              <FaUtensils className="text-gray-200 hover:text-green-400" />
              <Link className="text-gray-200 hover:text-green-400" to="/">Restaurants</Link>
            </li>
            <li className="nav-item flex items-center space-x-2">
              <FaPlane className="text-gray-200 hover:text-green-400" />
              <Link className="text-gray-200 hover:text-green-400" to="/">Flights</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
