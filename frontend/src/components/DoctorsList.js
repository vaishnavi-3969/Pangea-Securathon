import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DoctorsList = () => {
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const doctorTypes = ['Pediatrician', 'Cardiologist', 'Dermatologist', 'Orthopedic Surgeon', 'Oncologist', 'Neurologist', 'Gynecologist', 'Psychiatrist', 'ENT Specialist'];

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=20&nat=us&inc=name,email,location,phone,picture');
                const data = await response.json();
                const updatedDoctors = data.results.map((doctor, index) => ({
                    ...doctor,
                    type: doctorTypes[index % doctorTypes.length]
                }));
                setDoctors(updatedDoctors);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching doctors:', error);
                setIsLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div className="bg-gray-100 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6">Doctors List</h2>
                {isLoading ? (
                    <p className="text-gray-500">Loading...</p>
                ) : (
                    <div className="space-y-6">
                        {doctors.map((doctor, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        <img src={doctor.picture.thumbnail} alt="Doctor" className="h-12 w-12 rounded-full" />
                                        <div>
                                            <h3 className="text-xl font-semibold">{`${doctor.name.first} ${doctor.name.last}`}</h3>
                                            <p className="text-gray-500">{doctor.email}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">{doctor.phone}</p>
                                        <p className="text-gray-500">{doctor.type}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-600">{doctor.location.street.number} {doctor.location.street.name}, {doctor.location.city}</p>
                                </div>
                                <Link
                                    to={{
                                        pathname: `/doctors/book-appointment`,
                                    }}
                                    className="text-blue-500 hover:underline"
                                >
                                    View Profile
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorsList;
