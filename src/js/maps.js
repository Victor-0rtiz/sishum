let map = L.map("map").setView([11.9154487,-86.0699125], 15);
console.log("cargado");
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([11.9154487,-86.0699125])
  .addTo(map)
  .bindPopup("Colegio Humberto Pavon Fonseca.")
  .openPopup();
