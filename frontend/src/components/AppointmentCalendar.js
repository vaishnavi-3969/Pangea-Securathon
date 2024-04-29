import React from 'react';

const AppointmentCalendar = ({ addAvailability }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Appointment Calendar</h2>
            <div className="grid grid-cols-7 gap-4">
                {[...Array(30)].map((_, index) => (
                    <button
                        key={index}
                        className="border border-gray-300 p-2 rounded-lg hover:bg-gray-100"
                        onClick={() => addAvailability('2024-05-01', '10:00 AM')}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AppointmentCalendar;