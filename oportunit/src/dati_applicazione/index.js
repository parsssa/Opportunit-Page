// index.js
const CityFilter = require('./CityFilter');

// Specifica il percorso del tuo file JSON
const jsonFilePath = './comuni.json';

// Filtra le città con popolazione superiore a 500000 abitanti durante l'inizializzazione
const cityFilter = new CityFilter(jsonFilePath, 100000);

// Accesso all'array filtrato
console.log(cityFilter.filteredCities);
