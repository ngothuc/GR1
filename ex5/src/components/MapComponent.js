import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

const MapComponent = ({ start, end, handleMapClick }) => {

    const [route, setRoute] = useState(null);

    useEffect(() => {
        if (start && end) {
            const getRoute = async () => {
                try {
                    const response = await axios.get(`YOUR_ROUTING_API_END`, {
                        params: {
                            start: `${start.lat},${start.lng}`,
                            end: `${end.lat},${end.lng}`
                        }
                    });
                    setRoute(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
            getRoute();
        }
    }, [start, end]);

    const Markers = () => {
        useMapEvents({
            click: handleMapClick,
        });

        return (
            <>
                {start && (
                    <Marker position={start} icon={L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/128/484/484167.png' })}>
                        <Popup>Start Point</Popup>
                    </Marker>
                )}
                {end && (
                    <Marker position={end} icon={L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png' })}>
                        <Popup>End Point</Popup>
                    </Marker>
                )}
            </>
        );
    };

    return (
        <MapContainer center={[20.843326, 106.772430]} zoom={13} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers />
            {}
        </MapContainer>
    );
};

export default MapComponent;
