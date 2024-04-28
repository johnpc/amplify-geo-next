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
import { drawPoints } from 'maplibre-gl-js-amplify';
Amplify.configure(config);

function App() {
  const [{ latitude, longitude }, setMarkerLocation] = useState({
    latitude: 42.28,
    longitude: -83.75,
  });
  async function initializeMap() {
    const map = await createMap({
      container: 'map', // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/
      center: [-123.1187, 49.2819], // [Longitude, Latitude]
      zoom: 11
    });
    map.on('load', function () {
      drawPoints(
        'mySourceName', // Arbitrary source name
        [
          {
            coordinates: [-122.483696, 37.833818], // [Longitude, Latitude]
            title: 'Golden Gate Bridge',
            address: 'A suspension bridge spanning the Golden Gate'
          },
          {
            coordinates: [-122.477, 37.8105] // [Longitude, Latitude]
          }
        ], // An array of coordinate data, an array of Feature data, or an array of [NamedLocations](https://github.com/aws-amplify/maplibre-gl-js-amplify/blob/main/src/types.ts#L8)
        map,
        {
          showCluster: true,
          unclusteredOptions: {
            showMarkerPopup: true
          },
          clusterOptions: {
            showCount: true
          }
        }
      );
    });
  }

  initializeMap();
  return <><div id="map"></div></>
}

export default App