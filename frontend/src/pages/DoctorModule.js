import React, { useState, useEffect } from 'react';
import { useAuth } from "@pangeacyber/react-auth";
import AppointmentCalendar from '../components/AppointmentCalendar';
import Notification from '../components/Notification'; 

const DoctorModule = () => {
    const { user } = useAuth();
    const [notifications, setNotifications] = useState([]);
    const [notificationSound] = useState(new Audio('notification.mp3'));

    useEffect(() => {
        const timer = setTimeout(() => {
            const newNotification = {
                id: Math.random(),
                message: 'New appointment request for May 1st, 2024 at 10:00 AM.'
            };
            setNotifications(prevNotifications => [...prevNotifications, newNotification]);
            notificationSound.play(); 
        }, 3000);

        return () => clearTimeout(timer);
    }, [notificationSound]);

    const addAvailability = (date, time) => {
        console.log(`Added availability for ${date} at ${time}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Doctor Dashboard</h1>
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <AppointmentCalendar addAvailability={addAvailability} />
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                    <div>
                        {notifications.map(notification => (
                            <Notification key={notification.id} message={notification.message} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorModule;