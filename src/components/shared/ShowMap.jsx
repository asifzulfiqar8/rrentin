"use client"; // If you're using Next.js App Router

import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  useMap,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const buildingIcon = L.icon({
  iconUrl: "/images/dashboard/rental.png",
  iconSize: [56, 56],
  iconAnchor: [28, 56],
});

const createPriceIcon = (label) =>
  L.divIcon({
    className: "custom-price-icon",
    html: `<div>${label}</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

// ----------- SAMPLE DATA -------------
const polygonCoords = [
  [51.51, -0.12],
  [51.52, -0.1],
  [51.51, -0.08],
  [51.5, -0.09],
];
// The main property marker in the center
const centerMarkerPosition = [51.507, -0.09];

// ----------- COMPONENT -------------
const ShowMap = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "489px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={centerMarkerPosition}
        zoom={13}
        scrollWheelZoom={false}
        attributionControl={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
        />

        <Polygon
          pathOptions={{
            color: "#1a73e8",
            weight: 2,
            dashArray: "4",
            fillColor: "#c2e5ff",
            fillOpacity: 0.2,
          }}
          positions={polygonCoords}
        />

        {/* MAIN PROPERTY MARKER WITH CUSTOM POPUP */}
        <Marker position={centerMarkerPosition} icon={buildingIcon}>
          <Popup className="custom-popup">
            <div style={{ width: "200px" }}>
              {/* Image or thumbnail */}
              <img
                src="https://via.placeholder.com/300x200"
                alt="Property"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                  marginBottom: "8px",
                }}
              />

              {/* Property Title */}
              <h3
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Dream House
              </h3>

              {/* Sub info */}
              <p style={{ margin: "4px 0", fontSize: "14px", color: "#666" }}>
                8 Properties in Surin, Thailand
              </p>

              {/* Price & Tag */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "4px",
                }}
              >
                <span style={{ fontWeight: "600", color: "#333" }}>
                  $388.00/month
                </span>
                <span
                  style={{
                    background: "#ffe066",
                    color: "#333",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  Free
                </span>
              </div>

              {/* Rating */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "4px" }}>4.5</span>
                <img
                  src="/images/dashboard/star.png"
                  alt="star"
                  style={{ width: "16px", height: "16px" }}
                />
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ShowMap;
