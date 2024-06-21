import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

const MapComponent = ({ start, end, handleMapClick }) => {
    const [route, setRoute] = useState(null);

    // useEffect(() => {
    //     if (start && start.lat && start.lng && end && end.lat && end.lng) {
    //         const getRoute = async () => {
    //             try {
    //                 const response = await axios.get(`http://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}`, {
    //                     params: {
    //                         overview: 'full',
    //                         geometries: 'geojson'
    //                     }
    //                 });
    //                 setRoute(response.data.routes[0].geometry.coordinates);
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         };
    //         getRoute();
    //     }
    // }, [start, end]);

    const handleRouteClick = () => {
        if (start && start.lat && start.lng && end && end.lat && end.lng) {
            const getRoute = async () => {
                try {
                    const response = await axios.get(`http://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}`, {
                        params: {
                            overview: 'full',
                            geometries: 'geojson'
                        }
                    });
                    setRoute(response.data.routes[0].geometry.coordinates);
                } catch (error) {
                    console.error(error);
                }
            };
            getRoute();
        }
    };

    const Markers = () => {
        useMapEvents({
            click: handleMapClick,
        });

        return (
            <div>
                {start && start.lat && start.lng && (
                    <Marker
                        position={start}
                        icon={L.icon({
                            iconUrl: 'https://cdn-icons-png.flaticon.com/128/484/484167.png',
                            iconSize: [25, 25],
                        })}
                    >
                        <Popup>Start Point</Popup>
                    </Marker>
                )}
                {end && end.lat && end.lng && (
                    <Marker
                        position={end}
                        icon={L.icon({
                            iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
                            iconSize: [25, 25],
                        })}
                    >
                        <Popup>End Point</Popup>
                    </Marker>
                )}
            </div>
        );
    };

    return (
        <div className='map'>
            <div className='map-container'>
                <button onClick={handleRouteClick}>Đường đi</button>
                <MapContainer center={[21.006382, 105.841545]} zoom={30} style={{ height: "calc(100vh - 150px)", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Markers />
                    {route && (
                        <Polyline positions={route.map(coord => [coord[1], coord[0]])} color="blue" />
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapComponent;
