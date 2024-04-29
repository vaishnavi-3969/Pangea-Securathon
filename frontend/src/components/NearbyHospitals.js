import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NearbyHospitals = () => {
    const [hospitals, setHospitals] = useState([]);
    const [userLocation, setUserLocation] = useState({ lat: null, lng: null });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    useEffect(() => {
        if (userLocation.lat && userLocation.lng) {
            const loadScript = () => {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCb9fb_lhkKM48QagBcfX8uqIBbtlLQJ_E&libraries=places`;
                script.onload = initMap;
                document.head.appendChild(script);
            };

            loadScript();
        }
    }, [userLocation]);

    const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: userLocation,
            zoom: 15,
        });

        const service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(
            {
                location: userLocation,
                radius: 10000, // 10 km in meters
                type: 'hospital',
            },
            (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setHospitals(results);
                }
            }
        );
    };

    return (
        <div className="bg-gray-100 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6">Nearby Hospitals</h2>
                <div id="map" className="mb-8 rounded-lg overflow-hidden" style={{ width: '100%', height: '400px' }}></div>
                <Link to="/doctor-list">
                    <div className="space-y-8">
                        {hospitals.map((hospital, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
                                <p>{hospital.vicinity}</p>
                            </div>
                        ))}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NearbyHospitals;
