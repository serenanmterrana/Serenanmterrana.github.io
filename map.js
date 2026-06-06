window.addEventListener("load", function () {

  const map = L.map('map').setView([20, 0], 2);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; OpenStreetMap'
    }
  ).addTo(map);

  const redIcon = L.divIcon({
    className: 'custom-pin',
    html: '<div class="pin"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

  function addCountry(lat, lng, name) {
    L.marker([lat, lng], { icon: redIcon })
      .addTo(map)
      .bindPopup(name);
  }

  addCountry(39.8, -98.5, "United States");
  addCountry(28.3, 84.1, "Nepal");
  addCountry(23.6, -102.5, "Mexico");
  addCountry(-40.9, 174.8, "New Zealand");
});
