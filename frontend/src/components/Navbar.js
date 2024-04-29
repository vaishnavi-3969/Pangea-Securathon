import { useAuth } from "@pangeacyber/react-auth";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { authenticated, user, login, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Telemedicine Platform
        </Link>
        <div>
          <Link
            to="/doctor"
            className="text-white mr-4 hover:text-gray-300"
          >
            Doctor
          </Link>
          <Link to="/patient" className="text-white hover:text-gray-300">
            Patient
          </Link>
          <Link to="/profile">
            <span className="text-white ml-4">{user.email}</span>
          </Link>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full ml-4"
          >Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;