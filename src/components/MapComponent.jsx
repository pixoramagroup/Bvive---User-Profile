import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    coordinates: [-27.4698, 153.0251],
    name: 'Brisbane, Australia', // Default name
  });

  const handleMapClick = (e) => {
    setSelectedLocation({
      coordinates: [e.latlng.lat, e.latlng.lng],
      name: 'Custom Location', // You can replace this with a geocoding service call
    });
  };

  const MapClickEvents = () => {
    const map = useMapEvents({
      click: handleMapClick,
    });

    return null;
  };

  return (
    <div>
      <MapContainer
        center={selectedLocation.coordinates}
        zoom={13}
        style={{ height: '400px', width: '70vh' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickEvents />
        <Marker position={selectedLocation.coordinates}>
          <Popup>
            {selectedLocation.name}
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{marginTop:"-10px"}}> <p>I am currently located at: {selectedLocation.name}</p></div>
      {/* <p>I am currently located at: {selectedLocation.name}</p> */}
    </div>
  );
};

export default MapComponent;
