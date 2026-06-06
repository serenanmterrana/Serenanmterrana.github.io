window.addEventListener("load", function () {

  const map = L.map('map').setView([20, 0], 2);

  // 🌙 Cinematic dark map (VERY noticeable change)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap & CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // 📍 RED ICON (simple reliable version)
  const redIcon = new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  // 🌍 COUNTRIES

  function addCountry(lat, lng, name) {
    L.marker([lat, lng], { icon: redIcon })
      .addTo(map)
      .bindPopup(name);
  }

  addCountry(39.8283, -98.5795, "United States");
  addCountry(28.3949, 84.1240, "Nepal");
  addCountry(23.6345, -102.5528, "Mexico");
  addCountry(60.1282, 18.6435, "Sweden");
  addCountry(51.9194, 19.1451, "Poland");
  addCountry(30.3753, 69.3451, "Pakistan");
  addCountry(35.1264, 33.4299, "Cyprus");
  addCountry(1.3733, 32.2903, "Uganda");

  // 🇮🇳 India (NO NAME ON PIN TEXT — empty popup)
  L.marker([20.5937, 78.9629], { icon: redIcon })
    .addTo(map)
    .bindPopup("");

  addCountry(15.7835, -90.2308, "Guatemala");
  addCountry(13.7942, -88.8965, "El Salvador");
  addCountry(-9.1900, -75.0152, "Peru");
  addCountry(-35.6751, -71.5430, "Chile");
  addCountry(-38.4161, -63.6167, "Argentina");
  addCountry(35.9078, 127.7669, "South Korea");
  addCountry(-40.9006, 174.8860, "New Zealand");

});
