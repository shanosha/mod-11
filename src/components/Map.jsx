import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';
import customMarkerImg from "../images/icon-location.svg"
import { useEffect } from 'react';

// Leaflet component used to recenter the map
const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 13); // map.setView(position, 13) or map.flyTo(position, 13) for animation
    }
  }, [position, map]);
  return null;
}

// Component used to display the leaflet map, a marker icon, and a popup when the marker is clicked
const Map = ({data}) => {
  let position = null;
  if(data){
    position = [data.location.lat, data.location.lng];
  }
  
  const myIcon = L.icon({
    iconUrl: customMarkerImg,
    iconSize: [46, 56],
    popupAnchor: [0, -56 / 2]
  });

  return (
    <>
    {data && 
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%", paddingTop: "80px", minHeight: "400px", flex: "1 1 auto" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RecenterMap position={position} />
      <Marker position={position} icon={myIcon}>
        <Popup>
          IP Address Location
        </Popup>
      </Marker>
    </MapContainer>
    }
    </>
  );
};

export default Map;
