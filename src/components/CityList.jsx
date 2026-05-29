function CityList({ cities, setCities, setRouteData }) {
  const removeCity = (name) => {
    setCities((prev) =>
      prev.filter((city) => city.name !== name)
    );

    setRouteData(null);
  };

  if (cities.length === 0) {
    return (
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Selected Cities
        </h2>

        <p className="text-slate-500">
          No cities added yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-5">
        Selected Cities
      </h2>

      <div className="space-y-3">
        {cities.map((city, index) => (
          <div
            key={city.name}
            className="flex items-center justify-between bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>

              <span className="font-medium text-slate-700">
                {city.name}
              </span>
            </div>

            <button
              onClick={() => removeCity(city.name)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityList;