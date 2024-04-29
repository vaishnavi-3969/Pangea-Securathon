import React from 'react';
import { useAuth } from "@pangeacyber/react-auth";

const Landing = () => {
  const { login } = useAuth();

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen flex flex-col justify-center items-center">
      <header className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Welcome to Pangea Telemedicine
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Your trusted platform for secure and confidential medical consultations.
        </p>

        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
          onClick={login}>Login</button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Secure Consultations</h2>
            <p className="text-gray-600 text-center">Ensure confidentiality with end-to-end encryption.</p>
          </div>
          <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">24/7 Availability</h2>
            <p className="text-gray-600 text-center">Access healthcare professionals anytime, anywhere.</p>
          </div>
          <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">User-Friendly Interface</h2>
            <p className="text-gray-600 text-center">Easy-to-use platform for seamless consultations.</p>
          </div>
        </div>
        <div className="absolute bottom-0 mb-4">
          <p className="text-white text-sm">&copy; 2024 Pangea Telemedicine. All rights reserved.</p>
        </div>
      </header>
    </div>
  );
};

export default Landing;