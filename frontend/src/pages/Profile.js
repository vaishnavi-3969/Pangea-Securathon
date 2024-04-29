import React, { useState } from "react";
import { useAuth } from "@pangeacyber/react-auth";

const Profile = () => {
    const { user } = useAuth();
    const [firstName, setFirstName] = useState(user.profile?.first_name || "");
    const [lastName, setLastName] = useState(user.profile?.last_name || "");
    const [userType, setUserType] = useState(user.profile?.user_type || "");

    const handleSaveChanges = () => {
        // Here you can implement the logic to save changes to Firebase
        console.log("Changes saved!");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label className="text-gray-600 font-semibold">First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-input mt-1 block w-full rounded-md border-gray-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-600 font-semibold">Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-input mt-1 block w-full rounded-md border-gray-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-600 font-semibold">Email:</label>
                    <input
                        type="email"
                        value={user.email}
                        disabled
                        className="form-input mt-1 block w-full rounded-md border-gray-300 bg-gray-100"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-600 font-semibold">User Type:</label>
                    <select
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        className="form-select mt-1 block w-full rounded-md border-gray-300"
                    >
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                    </select>
                </div>
                <button
                    onClick={handleSaveChanges}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Profile;
