import { haversineDistance } from './distance';

export function nearestNeighborTSP(cities) {
  if (cities.length < 2) {
    return {
      route: cities,
      totalDistance: 0,
    };
  }

  const visited = new Array(cities.length).fill(false);

  const route = [];
  let totalDistance = 0;

  let currentIndex = 0;

  route.push(cities[currentIndex]);
  visited[currentIndex] = true;

  while (route.length < cities.length) {
    let nearestIndex = -1;
    let shortestDistance = Infinity;

    for (let i = 0; i < cities.length; i++) {
      if (!visited[i]) {
        const distance = haversineDistance(
          cities[currentIndex],
          cities[i]
        );

        if (distance < shortestDistance) {
          shortestDistance = distance;
          nearestIndex = i;
        }
      }
    }

    route.push(cities[nearestIndex]);
    visited[nearestIndex] = true;
    totalDistance += shortestDistance;
    currentIndex = nearestIndex;
  }

  totalDistance += haversineDistance(
    cities[currentIndex],
    cities[0]
  );

  route.push(cities[0]);

  return {
    route,
    totalDistance,
  };
}