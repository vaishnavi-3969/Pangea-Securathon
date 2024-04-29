import React, { useState, useEffect } from 'react';

const DoctorProfile = () => {
    const [doctor, setDoctor] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRandomDoctor = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/');
                const data = await response.json();
                const randomDoctor = {
                    name: {
                        first: data.results[0].name.first,
                        last: data.results[0].name.last,
                    },
                    email: data.results[0].email,
                    phone: data.results[0].phone,
                    picture: data.results[0].picture.large,
                    location: {
                        street: { number: data.results[0].location.street.number, name: data.results[0].location.street.name },
                        city: data.results[0].location.city,
                    },
                    type: 'Cardiologist', 
                    qualification: 'MBBS, MD', 
                    specialization: 'Cardiology',
                    university: 'Harvard Medical School',
                    essay: `Dr. ${data.results[0].name.last} is a highly experienced Cardiologist with over 20 years of practice. He completed his medical education from Harvard Medical School and has since been dedicated to providing top-notch cardiac care to his patients. Dr. ${data.results[0].name.last} specializes in various cardiac procedures and is known for his compassionate approach towards patient care.`,
                };
                setDoctor(randomDoctor);
                setIsLoading(false);
             
            } catch (error) {
                console.error('Error fetching random doctor:', error);
                setIsLoading(false);
            }
        };

        fetchRandomDoctor();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!doctor) {
        return <div>No doctor information available.</div>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-start justify-center">
            <div className="flex flex-col items-center mr-8">
                <img src={doctor.picture} alt="Doctor" className="h-48 w-48 rounded-full mb-4" /> {/* Larger photo */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold">{`${doctor.name.first} ${doctor.name.last}`}</h3>
                    <p className="text-gray-500">{doctor.email}</p>
                    <p className="text-gray-500">{doctor.phone}</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                    <p className="text-gray-600">{doctor.location.street.number} {doctor.location.street.name}, {doctor.location.city}</p>
                    <p className="text-gray-600">Qualification: {doctor.qualification}</p>
                    <p className="text-gray-600">Specialization: {doctor.specialization}</p>
                    <p className="text-gray-600">University: {doctor.university}</p>
                </div>
                <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">About Dr. {doctor.name.last}</h4>
                    <p className="text-gray-700">{doctor.essay}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
