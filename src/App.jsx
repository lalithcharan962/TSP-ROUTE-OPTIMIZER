import { useState } from 'react';
import MapView from './components/MapView';
import CitySelector from './components/CitySelector';
import RouteInfo from './components/RouteInfo';
import { nearestNeighborTSP } from './utils/tsp';
import CityList from './components/CityList';
function App() {
  const [cities, setCities] = useState([]);
  const [routeData, setRouteData] = useState(null);

  const optimizeRoute = () => {
    if (cities.length < 2) {
      alert('Add at least 2 cities');
      return;
    }

    const result = nearestNeighborTSP(cities);
    setRouteData(result);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        TSP Route Optimizer
      </h1>

      <CitySelector 
      cities={cities}
      setCities={setCities} />

      <div className="flex justify-centergap-4 mb-6">
        <button
          onClick={optimizeRoute}
          className="px-6 py-3 bg-green-600 text-white rounded-xl"
        >
          Optimize Route
        </button>

        <button
  onClick={() => {
    setCities([]);
    setRouteData(null);
  }}
  className="px-6 py-3 bg-red-600 text-white rounded-xl"
>
  Reset
</button>
      </div>

      <MapView cities={cities} routeData={routeData} />

      <CityList cities={cities} setCities={setCities} setRouteData={setRouteData} />

      <RouteInfo routeData={routeData} />
    </div>
  );
}

export default App;