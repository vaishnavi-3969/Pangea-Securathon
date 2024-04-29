import React from 'react';

const Landing = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-200 to-purple-200 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Welcome to Pangea Teleguard
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 mb-8">
              Your secure telemedicine solution for confidential consultations.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Feature Card */}
            <div className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-lg">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Secure Consultations</h2>
                <p className="text-gray-600">Ensure confidentiality with end-to-end encryption.</p>
              </div>
            </div>
            {/* Add similar feature cards for other features */}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-purple-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Ready to experience secure telemedicine?
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Sign up now to start connecting with healthcare providers securely.
            </p>
            <div className="flex justify-center">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
