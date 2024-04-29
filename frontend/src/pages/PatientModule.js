import React from 'react';
import MeetingOptions from '../components/MeetingOptions';
import NearbyHospitals from '../components/NearbyHospitals';
import DoctorProfile from '../components/DoctorProfile';

const PatientModule = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Patient Module</h1>
            <MeetingOptions />
            <NearbyHospitals />
            <DoctorProfile />
        </div>
    );
};

export default PatientModule;
