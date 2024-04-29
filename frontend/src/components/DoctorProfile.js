import React from 'react';

const DoctorProfile = () => {
    const doctor = {
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        availability: [
            { day: 'Monday', slots: ['10:00 AM', '11:00 AM', '2:00 PM'] },
            { day: 'Tuesday', slots: ['9:00 AM', '1:00 PM', '3:00 PM'] },
        ],
    };

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Doctor Profile</h2>
            <div className="font-semibold">{doctor.name}</div>
            <div className="mb-2">{doctor.specialty}</div>
            <div>
                <h3 className="font-semibold mb-2">Availability</h3>
                {doctor.availability.map((item, index) => (
                    <div key={index} className="mb-2">
                        <div>{item.day}</div>
                        <ul>
                            {item.slots.map((slot, idx) => (
                                <li key={idx}>{slot}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorProfile;
