import React from 'react';

const Notification = ({ message }) => {
    return (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg mb-4">
            <p className="font-semibold">Appointment Request</p>
            <p>{message}</p>
        </div>
    );
};

export default Notification;
