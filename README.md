# TSP Route Optimizer 🚀

Live Demo: https://tsp-route-optimizer.vercel.app/

## Overview

TSP Route Optimizer is a React-based web application that helps users find an efficient route between multiple cities using the Traveling Salesman Problem (TSP) concept.

Users can add cities dynamically, visualize locations on an interactive map, and generate an optimized route using the Nearest Neighbor heuristic. The application displays routes on real maps using OpenStreetMap, Leaflet, and OSRM routing services.

---

## Features

* Add cities dynamically using city name search
* Fetch real city coordinates using OpenStreetMap Nominatim API
* Interactive map visualization using Leaflet
* Route optimization using TSP Nearest Neighbor Algorithm
* Real road route rendering using OSRM Routing API
* Animated route visualization
* Dark Mode support
* Responsive design for desktop and mobile devices
* Route summary with total distance and stops

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS

### Maps & APIs

* Leaflet
* React Leaflet
* OpenStreetMap
* Nominatim API
* OSRM Routing API

### Algorithms

* Traveling Salesman Problem (TSP)
* Nearest Neighbor Heuristic
* Haversine Distance Formula

### Deployment

* Vercel

---

## How It Works

1. User enters city names.
2. The application fetches latitude and longitude coordinates using the Nominatim API.
3. Distances between cities are calculated using the Haversine Formula.
4. The Nearest Neighbor heuristic determines an efficient visiting order.
5. OSRM Routing API generates real road paths between cities.
6. The optimized route is displayed on an interactive map.

---

## Project Structure

```text
src/
├── components/
│   ├── CityList.jsx
│   ├── CitySelector.jsx
│   ├── MapView.jsx
│   └── RouteInfo.jsx
│
├── utils/
│   ├── distance.js
│   └── tsp.js
│
├── App.jsx
└── main.jsx
```

## Screenshots

Add screenshots of:

* Home Page
* Optimized Route
* Dark Mode
* Mobile View

---

## Future Improvements

* Save Routes using MongoDB
* User Authentication
* Route History
* Greedy vs Optimal Route Comparison
* Route Export as PDF
* Advanced TSP Algorithms

---

## Installation

```bash
git clone https://github.com/lalithcharan962/TSP-ROUTE-OPTIMIZER.git

cd TSP-ROUTE-OPTIMIZER

npm install

npm run dev
```

---

## Author

Lalith Charan

B.Tech CSE | Full Stack Development | DSA | AI Enthusiast
