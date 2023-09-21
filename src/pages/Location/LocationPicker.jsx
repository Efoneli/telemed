// import React, { useState } from "react";

// import { MapContainer, TileLayer } from "react-leaflet";
// import osm from "./osm-providers";
// import { useRef } from "react";
// import "leaflet/dist/leaflet.css";

// const BasicMap = () => {
//     const [center, setCenter] = useState({ lat: 9.0820, lng: 8.6753 });
//     const ZOOM_LEVEL = 9;
//     const mapRef = useRef();

//     return (
//         <>
//             <div className="">
//                 <div className="text-center">
//                     <div className="">
//                         <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
//                             <TileLayer
//                                 url={osm.maptiler.url}
//                                 attribution={osm.maptiler.attribution}
//                             />
                            
//                         </MapContainer>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BasicMap;


import React, { useState } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function MapWithLocationMarker() {
  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default MapWithLocationMarker;
