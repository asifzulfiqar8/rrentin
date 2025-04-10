

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

// Create a custom icon using an icon from react-icons.
const iconMarkup = renderToStaticMarkup(
  <FaMapMarkerAlt style={{ color: 'red', fontSize: '2rem' }} />
);
const customDivIcon = L.divIcon({
  html: iconMarkup,
  className: '',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

// Optional: A helper component to recenter the map automatically.
const RecenterAutomatically = ({ latlng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(latlng);
  }, [latlng, map]);
  return null;
};

const getCoordinates = async (locationName) => {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    locationName
  )}&limit=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      return [parseFloat(lat), parseFloat(lon)];
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
  }
  return null;
};

const HouseMap = ({ location, image, name }) => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState('');
  const defaultCenter = [51.505, -0.09];

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

  // Prevent rendering on server-side if window is not defined.
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="h-[300px] md:h-[400px] w-full">
      <MapContainer
        center={position || defaultCenter}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
        />
        {position && <RecenterAutomatically latlng={position} />}
        {position && (
          <Marker
            position={position}
            icon={customDivIcon}
            eventHandlers={{
              mouseover: (e) => {
                e.target.openTooltip();
              },
              mouseout: (e) => {
                e.target.closeTooltip();
              },
            }}
          >
            <Tooltip
              direction="top"
              offset={[0, -30]}
              opacity={1}
              className="custom-tooltip"
            >
              <div className="flex justify-between items-center gap-1 p-2.5" style={{ width: '240px' }}>
                {/* Text container on the left */}
                <div className="relative h-[50px] w-[50px] rounded-md bg-gray-200 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    unoptimized={true}
                    className="rounded-md"
                  />
                </div>
                <div className="">
                  <h4 style={{ margin: '5px 0', fontSize: '1rem' }}>{name}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{location}</p>
                </div>
                {/* Image container on the right */}
              </div>
            </Tooltip>

          </Marker>
        )}
      </MapContainer>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};


export default HouseMap