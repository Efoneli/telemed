import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';

const LocationPicker = () => {
  const nigeriaBounds = [
    [4.57, 3.24], // Southwest coordinate (Lagos)
    [13.88, 14.68], // Northeast coordinate (Maiduguri)
  ];

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <MapContainer bounds={nigeriaBounds}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Define a Polygon to outline the borders of Nigeria */}
        <Polygon
          pathOptions={{ color: 'blue' }}
          positions={[
            [4.57, 3.24], // Southwest (Lagos)
            [13.88, 3.24], // Southeast (Calabar)
            [13.88, 14.68], // Northeast (Maiduguri)
            [4.57, 14.68], // Northwest (Sokoto)
          ]}
        />
      </MapContainer>
    </div>
  );
};

export default LocationPicker;
