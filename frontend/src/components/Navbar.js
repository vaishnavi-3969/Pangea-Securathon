import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Telemedicine Platform
        </Link>
        <div>
          <Link
            to="/dashboard"
            className="text-white mr-4 hover:text-gray-300"
          >
            Dashboard
          </Link>
          <Link to="/appointments" className="text-white hover:text-gray-300">
            Appointments
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;