import { useState } from 'react';
import MapView from './components/MapView';
import CitySelector from './components/CitySelector';
import RouteInfo from './components/RouteInfo';
import CityList from './components/CityList';
import { nearestNeighborTSP } from './utils/tsp';

function App() {
  const [cities, setCities] = useState([]);
  const [routeData, setRouteData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const optimizeRoute = () => {
    if (cities.length < 2) {
      alert('Add at least 2 cities');
      return;
    }

    const result = nearestNeighborTSP(cities);
    setRouteData(result);
  };

  const resetAll = () => {
    setCities([]);
    setRouteData(null);
  };

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-900 text-white'
          : 'bg-slate-100 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className={`text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}
          >
            TSP Route Optimizer
          </h1>

          <p
            className={`mt-3 text-lg ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Optimize your route across multiple cities efficiently
          </p>

          <div className="mt-5">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-5 py-2 rounded-xl shadow transition ${
                darkMode
                  ? 'bg-yellow-400 text-black'
                  : 'bg-slate-800 text-white'
              }`}
            >
              {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>

        {/* Input */}
        <CitySelector
          cities={cities}
          setCities={setCities}
          darkMode={darkMode}
        />

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={optimizeRoute}
            className="px-8 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
          >
            Optimize Route
          </button>

          <button
            onClick={resetAll}
            className="px-8 py-3 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
          >
            Reset
          </button>
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Left Panel */}
          <div>
            <CityList
              cities={cities}
              setCities={setCities}
              setRouteData={setRouteData}
            />
          </div>

          {/* Center Map */}
          <div className="lg:col-span-2">
            <MapView
              cities={cities}
              routeData={routeData}
            />
          </div>

          {/* Right Panel */}
          <div>
            <RouteInfo routeData={routeData} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;