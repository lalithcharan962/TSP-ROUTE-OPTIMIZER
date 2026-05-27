import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from 'react-leaflet';

function FitBounds({ cities }) {
  const map = useMap();

  if (cities.length > 0) {
    const bounds = cities.map((city) => [
      city.lat,
      city.lng,
    ]);

    map.fitBounds(bounds, {
      padding: [50, 50],
    });
  }

  return null;
}

function MapView({ cities, routeData }) {
  const routePositions =
    routeData?.route.map((city) => [city.lat, city.lng]) || [];

  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
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

        {cities.map((city) => (
          <Marker key={city.name} position={[city.lat, city.lng]}>
            <Popup>{city.name}</Popup>
          </Marker>
        ))}

        {routePositions.length > 0 && (
          <Polyline positions={routePositions}
          color="blue"
          weight={5} />
        )}
      </MapContainer>
    </div>
  );
}

export default MapView;