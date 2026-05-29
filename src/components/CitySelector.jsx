import { useState } from 'react';

function CitySelector({ cities, setCities, darkMode }) {
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(false);

  const addCity = async () => {
    if (!cityName.trim()) return;

    const alreadyExists = cities.some(
      (city) =>
        city.name.toLowerCase() === cityName.toLowerCase()
    );

    if (alreadyExists) {
      alert('City already added');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&limit=1`
      );

      const data = await response.json();

      if (data.length === 0) {
        alert('City not found');
        return;
      }

      const city = {
        name: cityName,
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      };

      setCities((prev) => [...prev, city]);
      setCityName('');
    } catch (error) {
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`shadow rounded-2xl p-6 mb-8 ${
        darkMode ? 'bg-slate-800' : 'bg-white'
      }`}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addCity();
            }
          }}
          placeholder="Enter city name (e.g. Hyderabad, Mumbai)"
          className={`flex-1 px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? 'bg-white text-black border-slate-300'
              : 'bg-white text-black border-slate-300'
          }`}
        />

        <button
          onClick={addCity}
          disabled={loading}
          className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition disabled:bg-slate-400"
        >
          {loading ? 'Searching...' : 'Add City'}
        </button>
      </div>
    </div>
  );
}

export default CitySelector;
