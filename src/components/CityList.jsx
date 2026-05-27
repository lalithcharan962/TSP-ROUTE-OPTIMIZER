function CityList({ cities, setCities }) {
  const removeCity = (name) => {
    setCities((prev) =>
      prev.filter((city) => city.name !== name)
    );
    setRouteData(null);
  };

  if (cities.length === 0) return null;

  return (
    <div className="bg-white shadow rounded-2xl p-6 mt-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Selected Cities
      </h2>

      <div className="space-y-3">
        {cities.map((city) => (
          <div
            key={city.name}
            className="flex justify-between items-center bg-slate-100 px-4 py-3 rounded-xl"
          >
            <span>{city.name}</span>

            <button
              onClick={() => removeCity(city.name)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg"
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