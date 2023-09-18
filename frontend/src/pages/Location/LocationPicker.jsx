import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapComponent />;
}

function MapComponent() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

// import { MapContainer, TileLayer, Polygon } from 'react-leaflet';

// const LocationPicker = () => {
//   const nigeriaBounds = [
//     [4.57, 3.24], // Southwest coordinate (Lagos)
//     [13.88, 14.68]b, // Northeast coordinate (Maiduguri)
//   ];

//   return (
//     <div className='w-full h-full'>
//       <MapContainer bounds={nigeriaBounds}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {/* Define a Polygon to outline the borders of Nigeria */}
//         <Polygon
//           pathOptions={{ color: 'blue' }}
//           positions={[
//             [4.57, 3.24], // Southwest (Lagos)
//             [13.88, 3.24], // Southeast (Calabar)
//             [13.88, 14.68], // Northeast (Maiduguri)
//             [4.57, 14.68], // Northwest (Sokoto)
//           ]}
//         />
//       </MapContainer>
//     </div>
//   );
// };

// export default LocationPicker;
