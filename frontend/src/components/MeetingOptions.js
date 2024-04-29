import React, { useState } from 'react';

const MeetingOptions = () => {
    const [meetingType, setMeetingType] = useState('');

    const handleMeetingTypeChange = (type) => {
        setMeetingType(type);
    };

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Meeting Options</h2>
            <div className="flex justify-between">
                <button
                    className={`border border-gray-300 px-4 py-2 rounded-md mr-4 focus:outline-none ${meetingType === 'virtual' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                    onClick={() => handleMeetingTypeChange('virtual')}
                >
                    Virtual
                </button>
                <button
                    className={`border border-gray-300 px-4 py-2 rounded-md focus:outline-none ${meetingType === 'physical' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                    onClick={() => handleMeetingTypeChange('physical')}
                >
                    Physical
                </button>
            </div>
        </div>
    );
};

export default MeetingOptions;
