function RouteInfo({ routeData }) {
  if (!routeData) {
    return (
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Route Summary
        </h2>

        <p className="text-slate-500">
          Optimize a route to see details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-5">
        Route Summary
      </h2>

      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-slate-600 text-sm">
            Total Distance
          </p>

          <h3 className="text-2xl font-bold text-blue-700 mt-1">
            {routeData.totalDistance.toFixed(2)} km
          </h3>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-slate-600 text-sm">
            Total Stops
          </p>

          <h3 className="text-2xl font-bold text-green-700 mt-1">
            {routeData.route.length - 1}
          </h3>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <h3 className="font-semibold text-slate-700 mb-3">
            Route Flow
          </h3>

          <div className="space-y-2 max-h-72 overflow-y-auto">
            {routeData.route.map((city, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <div className="w-7 h-7 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>

                <span className="text-slate-700">
                  {city.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteInfo;