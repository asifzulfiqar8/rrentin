'use client'
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { FaMapMarkerAlt } from 'react-icons/fa';

// Convert a React icon to static markup for use in a Leaflet DivIcon.
const iconMarkup = renderToStaticMarkup(
  <FaMapMarkerAlt style={{ color: 'red', fontSize: '2rem' }} />
);
const customDivIcon = L.divIcon({
  html: iconMarkup,      // Use the generated HTML from the React Icon
  className: '',         // Remove default styling if desired
  iconSize: [30, 30],
  iconAnchor: [15, 30],  // The tip of the marker points to the location
  popupAnchor: [0, -30],
});

// A helper component to recenter the map when the coordinates change.
const RecenterAutomatically = ({ latlng }) => {
  const map = useMap();
  map.setView(latlng);
  return null;
};

// A function that fetches coordinates from the Nominatim API.
const getCoordinates = async (locationName) => {
  // Encode the location name and limit the result to the best match.
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}&limit=1`;
  const response = await fetch(url, {
    headers: { 'Accept': 'application/json' },
  });
  const data = await response.json();
  if (data.length > 0) {
    const { lat, lon } = data[0];
    return [parseFloat(lat), parseFloat(lon)]; // Return coordinates as [lat, lon]
  }
  return null;
};

const MapWithLocation = ({ location }) => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState('');
  // Use a default center before any valid location is found (London in this case)
  const defaultCenter = [51.505, -0.09];

  // When the location prop changes, fetch its coordinates.
  useEffect(() => {
    if (location) {
      getCoordinates(location).then((coords) => {
        if (coords) {
          setPosition(coords);
          setError('');
        } else {
          setError('Location not found');
          setPosition(null);
        }
      });
    }
  }, [location]);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer
        center={position || defaultCenter}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
        />
        {position && <RecenterAutomatically latlng={position} />}
        {position && (
          <Marker position={position} icon={customDivIcon}>
            <Popup>Location: {location}</Popup>
          </Marker>
        )}
      </MapContainer>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default MapWithLocation;
