import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const OutbreakMap = ({ outbreakData }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [0, 0],
      zoom: 2
    });

    map.current.on('load', () => {
      addOutbreakMarkers();
    });
  }, []);

  useEffect(() => {
    if (!map.current || !outbreakData) return;
    addOutbreakMarkers();
  }, [outbreakData]);

  const addOutbreakMarkers = () => {
    outbreakData.forEach(outbreak => {
      new mapboxgl.Marker({
        color: getColorByIntensity(outbreak.intensity)
      })
        .setLngLat([outbreak.longitude, outbreak.latitude])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<h3>${outbreak.location}</h3>
            <p>Cases: ${outbreak.cases}</p>
            <p>Deaths: ${outbreak.deaths}</p>`
          )
        )
        .addTo(map.current);
    });
  };

  const getColorByIntensity = (intensity) => {
    if (intensity > 0.7) return '#FF0000';
    if (intensity > 0.4) return '#FFA500';
    return '#FFFF00';
  };

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default OutbreakMap;