import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const BarriosMap = ({ className, style }) => {
  const [barriosData, setBarriosData] = useState(null);
  const [subbarriosData, setSubbarriosData] = useState(null);

  useEffect(() => {
    fetch('/data/barrios-luque.geojson')
      .then((res) => res.json())
      .then(setBarriosData)
      .catch(console.error);
    fetch('/data/subbarrios-luque.geojson')
      .then((res) => res.json())
      .then(setSubbarriosData)
      .catch(console.error);
  }, []);

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
    }
  };

  return (
    <MapContainer
      center={[-25.254141, -57.457643]}
      zoom={13}
      style={style}
      className={className}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {barriosData && (
        <GeoJSON data={barriosData} onEachFeature={onEachFeature} style={{ color: '#0066ff', weight: 2 }} />
      )}
      {subbarriosData && (
        <GeoJSON data={subbarriosData} onEachFeature={onEachFeature} style={{ color: '#ff6600', weight: 1, dashArray: '3' }} />
      )}
    </MapContainer>
  );
};

export default BarriosMap;
