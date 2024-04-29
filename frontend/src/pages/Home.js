import React from 'react';
import { useAuth } from "@pangeacyber/react-auth";
import { Link } from 'react-router-dom';
import { FaUserMd, FaUser } from 'react-icons/fa';

const Home = () => {
    const { authenticated, user, login, logout } = useAuth();

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <header className="text-center bg-gray-300 rounded-lg p-4">
                <h1 className="text-4xl font-bold mb-4">Welcome to Pangea Teleguard</h1>
                <p className="text-lg text-gray-700 mb-8">Your trusted telemedicine platform</p>
                {authenticated ? (
                    <>
                        <p className="text-lg">Welcome, {user.email}!</p>
                        <div className="mt-4 flex justify-center items-center">
                            <Link to="/doctor" className="text-blue-500 mr-4 flex items-center">
                                <FaUserMd className="mr-2" /> Doctor Module
                            </Link>
                            <Link to="/patient" className="text-green-500 flex items-center">
                                <FaUser className="mr-2" /> Patient Module
                            </Link>
                        </div>
                      
                    </>
                ) : (
                    <>
                        <p className="text-lg mb-4">Please login to access the platform</p>
                        <button
                            onClick={login}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
                        >
                            Login
                        </button>
                    </>
                )}
            </header>
            <section className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-4">About Pangea Teleguard</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Pangea Teleguard is a comprehensive telemedicine platform that connects patients with healthcare
                    providers seamlessly. With our platform, patients can easily book appointments, consult with
                    doctors online or offline, and access a range of healthcare services.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                    In addition, Pangea Teleguard provides features such as showing nearby hospitals, allowing
                    patients to search for healthcare providers based on their location, and much more.
                </p>
            </section>
        </div>
    );
};

export default Home;