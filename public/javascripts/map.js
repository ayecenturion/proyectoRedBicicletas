var map= L.map('main_map').setView([-34.6019618,-58.4334743],13)

L.tileLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.6035057,-58.4361248]).addTo(map);
L.marker([-34.6129409,-58.4244247]).addTo(map);
L.marker([-34.6132832,-58.4290692]).addTo(map);