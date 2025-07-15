import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link2, User } from 'lucide-react';

export default function Navigation() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link2 className="w-7 h-7 text-blue-600" />
            <Link to="/" className="text-2xl font-bold text-gray-900 font-serif tracking-tight">
              LinkSafe
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {!token ? (
              <>
                <Link to="/login">
                  <button className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded text-sm font-medium transition-colors shadow-sm">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 rounded transition-all">
                  <User className="w-5 h-5 text-gray-600" />
                  <Link to='/profile' className="text-sm font-medium">Profile</Link>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}