// CityFilter.js
class CityFilter {
  constructor(populationThreshold) {
    this.populationThreshold = populationThreshold;
  }

  filterCitiesByPopulation() {
    try {
      // Import the JSON file directly
      const citiesData = require('./comuni.json');
      return citiesData.filter(city => city.popolazione > this.populationThreshold);
    } catch (error) {
      console.error('Error loading city data:', error);
      return [];
    }
  }
}

export default CityFilter;
