window.addEventListener("load", function () {

  // 🌍 MAP
  const map = L.map('map', {
    worldCopyJump: true,
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([20, 0], 2);

  // 🌙 DARK CINEMATIC STYLE
  L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    {
      attribution: '&copy; Stadia Maps & OpenStreetMap',
      maxZoom: 20
    }
  ).addTo(map);

  // 📍 RED GLOWING PIN
  const redIcon = L.divIcon({
    className: 'custom-pin',
    html: '<div class="pin"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

  // 🌍 FUNCTION
  function addCountry(lat, lng, name, flag, page) {
    L.marker([lat, lng], { icon: redIcon })
      .addTo(map)
      .bindPopup(`
        <div style="text-align:center;min-width:140px;">
          <div style="font-size:24px;">${flag}</div>
          <div style="margin-top:6px;">
            <a href="${page}"
               style="text-decoration:none;font-weight:bold;color:#fff;">
              ${name}
            </a>
          </div>
        </div>
      `);
  }

  // 🇺🇸 NORTH AMERICA
  addCountry(39.8, -98.5, "United States", "🇺🇸", "usa.html");
  addCountry(23.6, -102.5, "Mexico", "🇲🇽", "mexico.html");
  addCountry(15.7, -90.2, "Guatemala", "🇬🇹", "guatemala.html");
  addCountry(13.7, -88.8, "El Salvador", "🇸🇻", "elsalvador.html");

  // 🇿🇦 AFRICA / ASIA
  addCountry(1.3, 32.2, "Uganda", "🇺🇬", "uganda.html");
  addCountry(30.3, 69.3, "Pakistan", "🇵🇰", "pakistan.html");
  addCountry(28.3, 84.1, "Nepal", "🇳🇵", "nepal.html");

  // 🇪🇺 EUROPE
  addCountry(60.1, 18.6, "Sweden", "🇸🇪", "sweden.html");
  addCountry(51.9, 19.1, "Poland", "🇵🇱", "poland.html");
  addCountry(35.1, 33.4, "Cyprus", "🇨🇾", "cyprus.html");

  // 🇦🇸 ASIA PACIFIC
  addCountry(35.9, 127.7, "South Korea", "🇰🇷", "southkorea.html");
  addCountry(20.6, 78.9, "India", "", "india.html"); // no flag in popup text style (hidden clean marker)

  // 🇦🇺 OCEANIA
  addCountry(-40.9, 174.8, "New Zealand", "🇳🇿", "newzealand.html");

  // 🇸🇦 SOUTH AMERICA
  addCountry(-9.1, -75.0, "Peru", "🇵🇪", "peru.html");
  addCountry(-35.6, -71.5, "Chile", "🇨🇱", "chile.html");
  addCountry(-38.4, -63.6, "Argentina", "🇦🇷", "argentina.html");

  // 🇮🇳 INDIA SPECIAL (NO NAME / NO FLAG / CLEAN LINK)
  L.marker([20.5937, 78.9629], { icon: redIcon })
    .addTo(map)
    .bindPopup(`
      <div style="text-align:center;">
        <a href="india.html"
           style="text-decoration:none;font-weight:bold;color:#ff2d55;">
          View Story
        </a>
      </div>
    `);

});
