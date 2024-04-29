import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentCalendar = ({ addAvailability }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [availability, setAvailability] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSaveAvailability = () => {
        if (selectedDate && availability.trim() !== '') {
            addAvailability(selectedDate.toISOString(), availability);
            setSuccessMessage('Availability saved successfully!');
            setAvailability('');
            setSelectedDate(null);
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } else {
            alert('Please select a date and enter availability!');
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Appointment Calendar</h2>
            <div className="mb-4">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="form-input w-full rounded-md border-gray-300"
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a date"
                />
            </div>
            <div>
                <input
                    type="text"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    placeholder="Enter availability..."
                    className="form-input w-full rounded-md border-gray-300"
                />
                <button
                    onClick={handleSaveAvailability}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-2 focus:outline-none"
                >
                    Save Availability
                </button>
            </div>
            {successMessage && (
                <div className="mt-4 text-green-600">{successMessage}</div>
            )}
        </div>
    );
};

export default AppointmentCalendar;
