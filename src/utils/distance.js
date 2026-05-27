function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

export function haversineDistance(city1, city2) {
  const R = 6371;

  const dLat = toRadians(city2.lat - city1.lat);
  const dLng = toRadians(city2.lng - city1.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(city1.lat)) *
      Math.cos(toRadians(city2.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}