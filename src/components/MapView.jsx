import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from 'react-leaflet';

import { useEffect, useState } from 'react';
import L from 'leaflet';

function FitBounds({ cities }) {
  const map = useMap();

  if (cities.length > 0) {
    const bounds = cities.map((city) => [
      city.lat,
      city.lng,
    ]);

    map.fitBounds(bounds, {
      padding: [60, 60],
    });
  }

  return null;
}

function createNumberedIcon(number) {
  return L.divIcon({
    html: `
      <div style="
        background:#2563eb;
        color:white;
        width:34px;
        height:34px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:bold;
        border:3px solid white;
        box-shadow:0 4px 10px rgba(0,0,0,0.25);
      ">
        ${number}
      </div>
    `,
    className: '',
    iconSize: [34, 34],
  });
}

function MapView({ cities, routeData }) {
  const [animatedRoute, setAnimatedRoute] = useState([]);
  const [roadRoute, setRoadRoute] = useState([]);

  useEffect(() => {
    if (!routeData) {
      setAnimatedRoute([]);
      return;
    }

    let index = 0;

    setAnimatedRoute([]);

    const interval = setInterval(() => {
      setAnimatedRoute(
        routeData.route.slice(0, index + 1)
      );

      index++;

      if (index >= routeData.route.length) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [routeData]);

  useEffect(() => {
    const fetchRoadRoute = async () => {
      if (!routeData || animatedRoute.length < 2) {
        setRoadRoute([]);
        return;
      }

      try {
        const coordinates = animatedRoute
          .map((city) => `${city.lng},${city.lat}`)
          .join(';');

        const response = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`//api for getting road route from osrm
        );

        const data = await response.json();

        const routeCoordinates =
          data.routes[0].geometry.coordinates.map(
            ([lng, lat]) => [lat, lng]
          );

        setRoadRoute(routeCoordinates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoadRoute();
  }, [animatedRoute, routeData]);

  return (
    <div className="h-[650px] w-full rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitBounds cities={cities} />

        {cities.map((city, index) => (
          <Marker
            key={city.name}
            position={[city.lat, city.lng]}
            icon={createNumberedIcon(index + 1)}
          >
            <Popup>{city.name}</Popup>
          </Marker>
        ))}

        {roadRoute.length > 0 && (
          <Polyline
            positions={roadRoute}
            color="#2563eb"
            weight={6}
            opacity={0.9}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default MapView;