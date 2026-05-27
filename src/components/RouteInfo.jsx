function RouteInfo({ routeData }) {
  if (!routeData) return null;

  return (
    <div className="mt-6 bg-white shadow-lg rounded-2xl p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Optimized Route Details
      </h2>

      <div className="text-xl font-semibold text-center mb-4">
        Total Distance: {routeData.totalDistance.toFixed(2)} km
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">
          Route Order:
        </h3>

        <div className="space-y-2">
          {routeData.route.map((city, index) => (
            <div
              key={index}
              className="bg-slate-100 px-4 py-2 rounded-xl"
            >
              {index + 1}. {city.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RouteInfo;