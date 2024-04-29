import React from 'react';

const ConfirmationPage = () => {
    const handleDownloadConfirmation = () => {
        alert('Downloading confirmation...');
    };

    const bookingDetails = {
        date: 'April 30, 2024',
        time: '10:00 AM',
        type: 'Virtual',
        location: 'Online',
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Booking Confirmation</h2>
            <p className="text-gray-600 mb-4">Thank you for booking your appointment.</p>
            <p className="text-gray-600 mb-4">Your appointment details:</p>
            <div className="border border-gray-200 p-4 rounded-md mb-4">
                <p><span className="font-semibold">Date:</span> {bookingDetails.date}</p>
                <p><span className="font-semibold">Time:</span> {bookingDetails.time}</p>
                <p><span className="font-semibold">Type:</span> {bookingDetails.type}</p>
                <p><span className="font-semibold">Location:</span> {bookingDetails.location}</p>
            </div>
            <p className="text-gray-600 mb-4">Details will be emailed to you shortly.</p>
            <div className="flex items-center space-x-4">
                <button
                    onClick={handleDownloadConfirmation}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                    Download Confirmation
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Receive Details via Email
                </button>
            </div>
        </div>
    );
};

export default ConfirmationPage;