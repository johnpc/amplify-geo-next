"use client";
import { useEffect, useState } from 'react';
import { Marker } from 'react-map-gl';
import { Amplify } from 'aws-amplify';
import { MapView } from '@aws-amplify/ui-react-geo';
import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react-geo/styles.css';
import config from '../../amplifyconfiguration.json';
import { createMap } from 'maplibre-gl-js-amplify';
import 'maplibre-gl/dist/maplibre-gl.css';
import "maplibre-gl-js-amplify/dist/public/amplify-map.css";

Amplify.configure(config);

function App() {
  const [{ latitude, longitude }, setMarkerLocation] = useState({
    latitude: 42.28,
    longitude: -83.75,
  });
  return (
    <>
      <MapView
        initialViewState={{
          latitude,
          longitude,
          zoom: 14,
        }}
      >
        <Marker latitude={latitude} longitude={longitude} />
      </MapView>
    </>
  )
}

export default App