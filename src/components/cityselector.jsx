import { useState } from 'react';

function CitySelector({ cities, setCities }) {
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
      console.error(error);
      alert('Something went wrong');
    }
    finally {
  setLoading(false);
}
  };

  return (
    <div className="flex gap-4 mb-6 justify-center">
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={(e) => {
  if (e.key === 'Enter') {
    addCity();
  }
}}
        placeholder="Enter city name"
        className="px-4 py-2 rounded-xl border w-80"
      />

      <button
        onClick={addCity}
        className="px-5 py-2 bg-blue-600 text-white rounded-xl"
      >
        {loading ? 'Searching...' : 'Add City'}
      </button>
    </div>
  );
}

export default CitySelector;