import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';

const AppointmentCalendar = ({ addAvailability }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [availabilities, setAvailabilities] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const handleAddAvailability = () => {
        if (selectedDate && startTime && endTime !== '') {
            const newAvailability = {
                date: selectedDate,
                startTime,
                endTime,
            };

            setAvailabilities([...availabilities, newAvailability]);
            setSuccessMessage('Availability added successfully!');
            setStartTime(null);
            setEndTime(null);
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } else {
            alert('Please select a date, start time, end time, and enter availability!');
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
            <div className="flex mb-4">
            <h2 className="text-xl font-semibold mb-4">Time Slot (24 hour clock)</h2>
                <div className="mr-4">
                    <TimePicker
                        onChange={(time) => setStartTime(time)}
                        value={startTime}
                        className="form-input w-full rounded-md border-gray-300"
                        format="HH:mm"
                        disableClock={true}
                        clearIcon={null}
                        placeholder="Start Time"
                    />
                </div>
                <div>
                    <TimePicker
                        onChange={(time) => setEndTime(time)}
                        value={endTime}
                        className="form-input w-full rounded-md border-gray-300"
                        format="HH:mm"
                        disableClock={true}
                        clearIcon={null}
                        placeholder="End Time"
                    />
                </div>
            </div>
    
            <div>
                <button
                    onClick={handleAddAvailability}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-2 focus:outline-none"
                >
                    Add Availability
                </button>
            </div>
            {successMessage && (
                <div className="mt-4 text-green-600">{successMessage}</div>
            )}
            {availabilities.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Scheduled Availabilities</h3>
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                <th className="border border-gray-200 px-4 py-2">Date</th>
                                <th className="border border-gray-200 px-4 py-2">Start Time</th>
                                <th className="border border-gray-200 px-4 py-2">End Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {availabilities.map((availability, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-200 px-4 py-2">{availability.date.toLocaleDateString()}</td>
                                    <td className="border border-gray-200 px-4 py-2">{availability.startTime}</td>
                                    <td className="border border-gray-200 px-4 py-2">{availability.endTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AppointmentCalendar;
