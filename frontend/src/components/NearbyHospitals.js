// NearbyHospitals.js
import React, { useEffect, useState } from 'react';

const NearbyHospitals = () => {
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        const loadScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCb9fb_lhkKM48QagBcfX8uqIBbtlLQJ_E&libraries=places`;
            script.onload = initMap;
            document.head.appendChild(script);
        };

        loadScript();
    }, []);

    const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });

        const service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(
            {
                location: { lat: -34.397, lng: 150.644 },
                radius: 100000, // 100 km in meters
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