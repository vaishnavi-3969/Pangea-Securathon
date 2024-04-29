import React, { useState } from 'react';
import { format } from 'date-fns';

const BookingForm = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [todayDate] = useState(new Date());
    const availableSlots = [
        { id: 1, time: '09:00 AM', type: 'Virtual' },
        { id: 2, time: '10:00 AM', type: 'Physical' },
        { id: 3, time: '11:00 AM', type: 'Virtual' },
        { id: 4, time: '02:00 PM', type: 'Physical' },
        { id: 5, time: '03:00 PM', type: 'Virtual' },
    ];

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };

    const handleConfirmBooking = () => {
        if (selectedSlot) {
            alert('Redirecting to confirmation');
            window.location.href="/confirmation"
        } else {
            alert('Please select a slot before confirming.');
        }
    };

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
            <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600">Today's Date: {format(todayDate, 'MMMM dd, yyyy')}</p>
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    <p className="text-blue-600 cursor-pointer">View All Dates</p>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                {availableSlots.map((slot) => (
                    <div
                        key={slot.id}
                        className={`flex items-center justify-between p-4 rounded-lg cursor-pointer hover:bg-gray-100 ${
                            selectedSlot === slot ? 'bg-blue-100' : ''
                        }`}
                        onClick={() => handleSlotSelection(slot)}
                    >
                        <div>
                            <p className="font-semibold">{slot.time}</p>
                            <p className="text-gray-500">{slot.type} Meeting</p>
                        </div>
                        {selectedSlot === slot && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </div>
                ))}
            </div>
            {selectedSlot && (
                <div className="mt-4">
                    <p className="text-gray-600">Selected Slot:</p>
                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                        <p className="font-semibold">{selectedSlot.time}</p>
                        <p className="text-gray-500">{selectedSlot.type} Meeting</p>
                    </div>
                </div>
            )}
            <button
                onClick={handleConfirmBooking}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
            >
                Confirm Booking
            </button>
        </div>
    );
};

export default BookingForm;