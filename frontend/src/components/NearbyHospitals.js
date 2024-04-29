import React, { useEffect, useState } from 'react';

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
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Nearby Hospitals</h2>
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
            <ul>
                {hospitals.map((hospital, index) => (
                    <li key={index} className="mb-2">
                        <div className="font-semibold">{hospital.name}</div>
                        <div>{hospital.vicinity}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NearbyHospitals;