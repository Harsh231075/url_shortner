import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link2, User } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { FcBrokenLink } from "react-icons/fc";

export default function Navigation() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <FcBrokenLink className="w-10 h-10 text-blue-600" />
            <Link to="/" className="text-2xl font-bold font-serif tracking-tight">
              <h1 className="text-4xl font-extrabold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Link</span>
                <span className="text-gray-800">Safe</span>
              </h1>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {!token ? (
              <>
                <div className="flex items-center gap-3">
                  {/* Login Button */}
                  <Link to="/login">
                    <button className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-200">
                      Login
                    </button>
                  </Link>

                  {/* Sign Up Button */}
                  <Link to="/register">
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
                      Sign Up
                    </button>
                  </Link>
                </div>

              </>
            ) : (
              <div className="relative group">
                <Link to="/profile" className="text-xl font-medium">
                  <button className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold">Profile</span>
                  </button>
                </Link>

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